import React from 'react';
import { ChatWindow } from '../../components/Chat/ChatWindow';
import { ChatTicketList } from './ChatTicketList';

const Chat = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Support Chat</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ChatTicketList />
        </div>
        <div className="lg:col-span-2">
          <ChatWindow messages={[]} onSendMessage={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
