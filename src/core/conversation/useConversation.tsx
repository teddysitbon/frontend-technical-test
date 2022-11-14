import { Reducer, useCallback, useMemo, useReducer } from 'react';
import {
  Action,
  ActionType,
  State,
  TypeConversationContext,
} from 'types/action';
import { Message } from 'types/message';
import { initState } from './constants';
import { reducer } from './reducer';

export function useConversation(): TypeConversationContext {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initState,
  );

  const updateConversationSelected = useCallback(
    (conversationId: number, name: string): void => {
      dispatch({
        type: ActionType.UpdateConversationSelected,
        payload: {
          conversationSelected: conversationId,
          nameConversationSelected: name,
        },
      });
    },
    [],
  );

  const updateMessages = useCallback((messages: Message[]): void => {
    dispatch({
      type: ActionType.UpdateMessages,
      payload: {
        messages,
      },
    });
  }, []);

  const addMessage = useCallback((message: Message): void => {
    dispatch({
      type: ActionType.AddMessage,
      payload: {
        message,
      },
    });
  }, []);

  const toggleSidebar = useCallback((isOpened: boolean): void => {
    dispatch({
      type: ActionType.ToggleSidebar,
      payload: {
        isOpened,
      },
    });
  }, []);

  return useMemo(
    () => ({
      state,
      updateConversationSelected,
      updateMessages,
      addMessage,
      toggleSidebar,
    }),
    [
      state,
      updateConversationSelected,
      updateMessages,
      addMessage,
      toggleSidebar,
    ],
  );
}
