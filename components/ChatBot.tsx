import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';
import { createChatSession, sendMessageToChat } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat } from "@google/genai";
import ReactMarkdown from 'react-markdown';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Bonjour ! Je suis l'assistant virtuel de POWERFUL REACH. Comment puis-je vous aider ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatSessionRef.current = createChatSession();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    if (!chatSessionRef.current) {
      chatSessionRef.current = createChatSession();
    }

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const responseText = await sendMessageToChat(chatSessionRef.current, userMsg);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300 hover:scale-110 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 bg-cyan-600 text-white hover:bg-cyan-500'}`}
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-full max-w-[380px] h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform origin-bottom-right border border-slate-200 dark:border-slate-700 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-slate-100 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 p-4 rounded-t-2xl flex justify-between items-center shadow-sm border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="bg-cyan-100 dark:bg-cyan-900/50 p-1.5 rounded-full border border-cyan-200 dark:border-cyan-500/30">
                <Bot className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Assistant IA</h3>
                <span className="text-xs text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.8)]"></span> En ligne
                </span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-slate-200 dark:hover:bg-slate-700 p-1 rounded-full transition text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/70 dark:bg-slate-950/50 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-cyan-600 text-white rounded-tr-none shadow-[0_4px_10px_rgba(6,182,212,0.2)]' 
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-tl-none shadow-sm'
              }`}>
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-200 dark:border-slate-700">
                <Loader2 className="w-4 h-4 animate-spin text-cyan-600 dark:text-cyan-400" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 rounded-b-2xl">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-950 p-2 rounded-xl border border-slate-200 dark:border-slate-700 focus-within:border-cyan-500/50 focus-within:ring-1 focus-within:ring-cyan-500/50 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Posez votre question..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-md shadow-cyan-600/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center mt-1">
            <p className="text-[10px] text-slate-500 dark:text-slate-600">Propulsé par Gemini</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;