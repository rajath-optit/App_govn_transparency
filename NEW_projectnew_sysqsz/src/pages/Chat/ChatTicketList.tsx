import React from 'react';
import { ChatTicket } from '../../types/chat';

interface ChatTicketListProps {
  tickets: ChatTicket[];
}

export const ChatTicketList: React.FC<ChatTicketListProps> = ({ tickets }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Chat Tickets</h3>
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-lg">{ticket.category}</h4>
                <p className="text-gray-600 mt-1">{ticket.status}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-sm text-gray-500">Priority: {ticket.priority}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    ticket.status === 'open' ? 'bg-blue-100 text-blue-800' :
                    ticket.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="View ticket details"
                >
                  <i className="fas fa-eye text-gray-500 hover:text-gray-700"></i>
                </button>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="Close ticket"
                >
                  <i className="fas fa-times text-gray-500 hover:text-gray-700"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
