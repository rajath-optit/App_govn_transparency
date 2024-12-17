import { useState } from 'react';
import { ChatMessage } from '@/types/chat';

export const useAIChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: 'ai',
      content: 'Hello! How can I help you today?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    setIsLoading(true);
    
    // Add user message
    setMessages(prev => [...prev, { type: 'user', content }]);

    try {
      // Simulated AI response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessages(prev => [...prev, {
        type: 'ai',
        content: 'Thank you for your message. I understand your query and I\'m here to help. Could you please provide more details about your specific concern?'
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
};