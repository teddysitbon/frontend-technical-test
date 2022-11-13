import { Action, ActionType, State } from 'types/action';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.UpdateConversationSelected: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      throw Error('Wrong type of action!');
    }
  }
}
