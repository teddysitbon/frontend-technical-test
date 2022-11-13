import { Reducer, useCallback, useMemo, useReducer } from 'react';
import { Action, ActionType, State } from 'types/action';
import { initState } from './constants';
import { reducer } from './reducer';

export function useConversation(): any {
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

  return useMemo(
    () => ({
      state,
      updateConversationSelected,
    }),
    [state, updateConversationSelected],
  );
}
