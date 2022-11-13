import { ReactNode, Reducer, useReducer } from 'react';
import { Action, State } from 'types/action';
import { initState } from './constants';
import { ConversationContext } from './ConversationContext';
import { reducer } from './reducer';

export function ConversationProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initState,
  );

  return (
    <ConversationContext.Provider value={{ state, dispatch }}>
      {children}
    </ConversationContext.Provider>
  );
}
