import { Conversation } from './conversation';

export enum ActionType {
  UpdateConversationSelected = 'UpdateConversationSelected',
}

export type State = {
  conversations: Conversation[];
  conversationSelected: number;
  nameConversationSelected: string;
};

export type Action = UpdateConversationSelected;

type UpdateConversationSelected = {
  type: ActionType.UpdateConversationSelected;
  payload: { conversationSelected: number; nameConversationSelected: string };
};
