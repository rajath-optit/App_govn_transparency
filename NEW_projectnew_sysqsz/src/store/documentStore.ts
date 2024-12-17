import { create } from 'zustand';
import { Document } from '../types';

interface DocumentState {
  documents: Document[];
  isLoading: boolean;
  error: string | null;
}

export const useDocumentStore = create<DocumentState & {
  fetchDocuments: () => Promise<void>;
  uploadDocument: (file: File) => Promise<void>;
  deleteDocument: (id: string) => Promise<void>;
}>((set) => ({
  documents: [],
  isLoading: false,
  error: null,

  fetchDocuments: async () => {
    set({ isLoading: true });
    try {
      // API call would go here
      const documents: Document[] = [];
      set({ documents, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch documents', isLoading: false });
    }
  },

  uploadDocument: async (file) => {
    // Implementation for document upload
  },

  deleteDocument: async (id) => {
    // Implementation for document deletion
  },
}));
