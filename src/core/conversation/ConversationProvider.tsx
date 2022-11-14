import { ReactNode, Reducer, useReducer } from 'react';
import { ConversationContext } from './ConversationContext';
import { useConversation } from './useConversation';

export function ConversationProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const {
    state,
    updateConversationSelected,
    updateMessages,
    addMessage,
    toggleSidebar,
  } = useConversation();

  return (
    <ConversationContext.Provider
      value={{
        state,
        updateConversationSelected,
        updateMessages,
        addMessage,
        toggleSidebar,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
}
