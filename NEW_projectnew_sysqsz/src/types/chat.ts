export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  attachments: Attachment[];
  status: 'sent' | 'delivered' | 'read';
}

export interface ChatTicket {
  id: string;
  userId: string;
  workerId: string;
  status: 'open' | 'pending' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface Attachment {
  id: string;
  type: string;
  url: string;
  name: string;
  size: number;
}
