"use client";

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

export default function ChatInterface() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I am your JAMB Prep Assistant. I know the entire JAMB syllabus inside out. Let's secure that admission! What topic do you want to master today?", 
      sender: 'ai' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  // Auto-scroll to bottom ref
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // 1. Add User Message
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // 2. Simulate AI Delay (For the demo feel)
    setTimeout(() => {
      const aiMsg = { 
        id: Date.now() + 1, 
        text: "That is a great question. Based on the 2024 JAMB Past Questions, this topic appears frequently in Section B. Let me break it down...", 
        sender: 'ai' 
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <div className="status-dot"></div>
        <h3>JAMB Success AI </h3>
      </div>

      {/* Messages */}
      <div className="messages-area">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
            <div className={`avatar ${msg.sender === 'ai' ? 'ai-avatar' : 'user-avatar'}`}>
              {msg.sender === 'ai' ? <Bot size={18} /> : <User size={18} />}
            </div>
            <div className={`bubble ${msg.sender === 'ai' ? 'ai-bubble' : 'user-bubble'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="message-wrapper ai">
            <div className="avatar ai-avatar"><Bot size={18} /></div>
            <div className="bubble ai-bubble" style={{ fontStyle: 'italic', color: '#94a3b8' }}>
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="input-area">
        <input 
          type="text" 
          placeholder="Ask about Physics, Chemistry, or Biology..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="send-btn" onClick={handleSend} disabled={!input.trim()}>
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}