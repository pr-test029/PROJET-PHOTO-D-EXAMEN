import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SchoolFinderResponse, GroundingChunk } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

/**
 * Chat with Gemini using the gemini-3-pro-preview model.
 * Context is set to act as an assistant for the Powerful Reach project.
 */
export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: `You are a helpful and enthusiastic assistant for "POWERFUL REACH", a social entrepreneurship project in Brazzaville, Congo. 
      The project aims to provide affordable exam photos for students.
      Key details:
      - Problem: Exam photos are mandatory but often expensive and inconvenient.
      - Solution: On-site service at schools, 50% cheaper than competition.
      - Price: 300-500 FCFA vs 1000 FCFA competition.
      - Impact (Vision RICHE): Accessibility, Time-saving, Inspiration, Job creation.
      
      Answer questions about the business model, the social impact, or general questions about the project clearly and concisely.`,
    },
  });
};

export const sendMessageToChat = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "Une erreur est survenue lors de la communication avec l'IA.";
  }
};

/**
 * Find schools using Gemini Maps Grounding.
 * Model: gemini-2.5-flash
 */
export const findSchools = async (location: string): Promise<SchoolFinderResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Find 5 popular secondary schools or high schools (lycées/collèges) near ${location}, Brazzaville. List them and provide a brief detail about each.`,
      config: {
        tools: [{ googleMaps: {} }],
      },
    });

    const text = response.text || "Aucune information trouvée.";
    
    // Extract grounding chunks safely
    const groundingChunks: GroundingChunk[] = 
      response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return { text, groundingChunks };
  } catch (error) {
    console.error("Maps Error:", error);
    return { text: "Impossible de récupérer les données de localisation pour le moment." };
  }
};
