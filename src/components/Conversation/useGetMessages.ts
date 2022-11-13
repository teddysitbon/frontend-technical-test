import { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { Message } from 'types/message';

export function useGetMessages(conversationId: number): {
  loading: boolean;
  messages: Message[];
} {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

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
        } catch (error) {
          throw new Error(error as string);
        }
        setLoading(false);
      };

      fetchConversations();
    }
  }, [conversationId]);

  const getMessageSorted = useCallback((messages: Message[]) => {
    return [...messages].sort((a, b) => a.timestamp - b.timestamp);
  }, []);

  return useMemo(
    () => ({
      loading: isLoading,
      messages: getMessageSorted(messages),
    }),
    [isLoading, getMessageSorted, messages],
  );
}
