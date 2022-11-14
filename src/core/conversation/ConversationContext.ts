import { createContext } from 'react';
import { State, TypeConversationContext } from 'types/action';

export const ConversationContext = createContext<
  Partial<TypeConversationContext>
>({});
