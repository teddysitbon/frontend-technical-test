import { useContext } from 'react';
import { ConversationContext } from './ConversationContext';

export function useTest(): string {
  return useContext(ConversationContext);
}
