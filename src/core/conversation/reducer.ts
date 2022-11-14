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
    case ActionType.UpdateMessages: {
      return {
        ...state,
        messages: action.payload.messages,
      };
    }
    case ActionType.AddMessage: {
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
      };
    }
    case ActionType.ToggleSidebar: {
      return {
        ...state,
        sidebarOpened: action.payload.isOpened,
      };
    }
    default: {
      throw Error('Wrong type of action!');
    }
  }
}
