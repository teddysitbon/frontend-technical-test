import { Action, ActionType, State } from 'types/action';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.UpdateConversationSelected: {
      return {
        ...state,
        conversationSelected: action.payload.conversationSelected,
        nameConversationSelected: action.payload.nameConversationSelected,
      };
    }
    default: {
      throw Error('Wrong type of action!');
    }
  }
}
