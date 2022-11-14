import { useState, useEffect, useMemo, useCallback, useContext } from 'react';
import axios from 'axios';
import { Message } from 'types/message';
import { ConversationContext } from 'core/conversation';

export function useGetMessages(conversationId: number): {
  loading: boolean;
  messages: Message[];
} {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const { updateMessages } = useContext(ConversationContext);

  const getMessageSorted = useCallback((messages: Message[]) => {
    return [...messages].sort((a, b) => a.timestamp - b.timestamp);
  }, []);

  useEffect(() => {
    setMessages([]);
    setLoading(true);

    if (conversationId !== null) {
      const fetchConversations = async () => {
        try {
          const { data: response } = await axios.get(
            `${process.env.API_URL}/messages/${conversationId}`,
          );
          setMessages(response);
          updateMessages(getMessageSorted(response));
        } catch (error) {
          throw new Error(error as string);
        }
        setLoading(false);
      };

      fetchConversations();
    }
  }, [conversationId, getMessageSorted, updateMessages]);

  return useMemo(
    () => ({
      loading: isLoading,
      messages: getMessageSorted(messages),
    }),
    [isLoading, getMessageSorted, messages],
  );
}
