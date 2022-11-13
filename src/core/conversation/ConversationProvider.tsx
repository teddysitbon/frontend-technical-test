import { ReactNode, Reducer, useReducer } from 'react';
import { ConversationContext } from './ConversationContext';
import { useConversation } from './useConversation';

export function ConversationProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const { state, updateConversationSelected, updateNameConversation } =
    useConversation();

  return (
    <ConversationContext.Provider
      value={{ state, updateConversationSelected, updateNameConversation }}
    >
      {children}
    </ConversationContext.Provider>
  );
}
