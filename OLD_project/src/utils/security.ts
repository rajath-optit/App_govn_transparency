import { SHA256 } from 'crypto-js';

export const hashPassword = (password: string): string => {
  return SHA256(password).toString();
};

export const generateCSRFToken = (): string => {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};