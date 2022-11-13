import { createContext } from 'react';
import { State } from 'types/action';

export type TypeConversationContext = {
  state: State;
  updateConversationSelected: (conversationId: number, name: string) => void;
};

export const ConversationContext = createContext<
  Partial<TypeConversationContext>
>({});
