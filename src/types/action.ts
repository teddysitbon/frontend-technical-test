import { Conversation } from './conversation';

export enum ActionType {
  UpdateConversationSelected = 'UpdateConversationSelected',
}

export type State = {
  conversations: Conversation[];
  conversationSelected: number;
};

export type Action = UpdateConversationSelected;

type UpdateConversationSelected = {
  type: ActionType.UpdateConversationSelected;
  payload: Partial<State>;
};
