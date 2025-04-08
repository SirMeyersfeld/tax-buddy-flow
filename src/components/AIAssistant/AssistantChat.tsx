
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const taxResponses: Record<string, string> = {
  "hello": "Hello! How can I help you with your tax questions today?",
  "deductions": "Common deductions for freelancers include home office expenses, business travel, health insurance premiums, professional development, and retirement plan contributions. Remember to keep receipts for all your business expenses!",
  "quarterly": "Freelancers typically need to pay estimated taxes quarterly if they expect to owe $1,000 or more in taxes. The due dates are usually April 15, June 15, September 15, and January 15 of the following year.",
  "1099": "As a freelancer, you'll receive a 1099-MISC or 1099-NEC form from each client who paid you $600 or more during the tax year. You'll report this income on Schedule C of your personal tax return.",
  "home office": "To qualify for the home office deduction, you need a space used exclusively and regularly for business. You can deduct using either the simplified method ($5 per square foot, up to 300 sq ft) or the regular method (based on actual expenses).",
  "llc": "An LLC can provide liability protection while allowing pass-through taxation. For tax purposes, single-member LLCs are typically treated as sole proprietorships, while multi-member LLCs are treated as partnerships.",
  "mileage": "For 2023, the standard mileage rate for business driving is 65.5 cents per mile. Keep a detailed mileage log with dates, destinations, purpose, and miles driven for each business trip.",
  "receipts": "You should keep tax records and receipts for at least 3 years from the date you filed the return. For certain situations, like property records, keep them for 7 years or longer.",
  "self employment tax": "Self-employment tax is 15.3% (12.4% for Social Security and 2.9% for Medicare). You can deduct half of this tax on your income tax return.",
  "estimated taxes": "To calculate estimated taxes, estimate your expected adjusted gross income, taxable income, deductions, and credits for the year. Use Form 1040-ES or tax software to help with this calculation."
};

const defaultResponses = [
  "I'm sorry, I don't have specific information about that tax topic. For personalized tax advice, I recommend consulting with a certified tax professional.",
  "That's a great question! While I have general tax knowledge, specific situations may require consulting with a tax advisor who can examine your unique circumstances.",
  "For detailed information on this topic, I recommend checking the official IRS website (irs.gov) or consulting with a tax professional who specializes in small business taxation."
];

const TAX_ASSISTANT_INTRO = "Hi, I'm your TaxFlow AI Assistant. I can answer common tax questions for freelancers and small businesses. How can I help you today?";

const AssistantChat: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: TAX_ASSISTANT_INTRO, sender: 'assistant', timestamp: new Date() }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      const response = generateResponse(input.toLowerCase());
      const assistantMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };
  
  const generateResponse = (query: string): string => {
    // Check for keyword matches in the query
    for (const [keyword, response] of Object.entries(taxResponses)) {
      if (query.includes(keyword)) {
        return response;
      }
    }
    
    // If no keyword matches, return a default response
    const randomIndex = Math.floor(Math.random() * defaultResponses.length);
    return defaultResponses[randomIndex];
  };
  
  return (
    <div className="flex flex-col h-[600px] max-h-[80vh] bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-taxflow-blue to-taxflow-darkblue p-4 text-white">
        <div className="flex items-center">
          <MessageCircle className="mr-2" />
          <h2 className="text-xl font-semibold">Tax Assistant</h2>
        </div>
        <p className="text-sm opacity-90">Ask me about tax deductions, quarterly payments, and more</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user' 
                  ? 'bg-taxflow-blue text-white rounded-br-none' 
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              <p>{message.text}</p>
              <div 
                className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 rounded-bl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="border-t p-4 bg-gray-50">
        <div className="flex items-center">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a tax question..."
            className="flex-1"
          />
          <Button 
            type="submit" 
            className="ml-2 bg-taxflow-blue hover:bg-taxflow-darkblue" 
            size="icon"
          >
            <Send size={18} />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          For personalized tax advice, please consult a professional tax advisor.
        </p>
      </form>
    </div>
  );
};

export default AssistantChat;
