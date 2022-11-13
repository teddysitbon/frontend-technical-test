import { Action, ActionType, State } from 'types/action';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.UpdateConversationSelected: {
      console.log(action.payload.conversationSelected);
      return {
        ...state,
        conversationSelected: action.payload.conversationSelected,
      };
    }
    default: {
      throw Error('Wrong type of action!');
    }
  }
}
