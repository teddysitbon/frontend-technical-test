import { Message } from './message';

export enum ActionType {
  UpdateConversationSelected = 'UpdateConversationSelected',
  UpdateMessages = 'UpdateMessages',
  AddMessage = 'AddMessage',
  ToggleSidebar = 'ToggleSidebar',
}

export type State = {
  messages: Message[];
  conversationSelected: number;
  nameConversationSelected: string;
  sidebarOpened: boolean;
};

export type Action =
  | UpdateConversationSelected
  | UpdateMessages
  | AddMessage
  | ToggleSidebar;

type UpdateConversationSelected = {
  type: ActionType.UpdateConversationSelected;
  payload: { conversationSelected: number; nameConversationSelected: string };
};

type UpdateMessages = {
  type: ActionType.UpdateMessages;
  payload: { messages: Message[] };
};

type AddMessage = {
  type: ActionType.AddMessage;
  payload: { message: Message };
};

type ToggleSidebar = {
  type: ActionType.ToggleSidebar;
  payload: { isOpened: boolean };
};

export type TypeConversationContext = {
  state: State;
  updateConversationSelected: (conversationId: number, name: string) => void;
  updateMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
  toggleSidebar: (isOpened: boolean) => void;
};
