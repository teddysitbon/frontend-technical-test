import { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { useUser } from 'core/user';
import { Conversation } from 'types/conversation';

export function useGetConversations(): {
  loading: boolean;
  conversations: Conversation[];
} {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const userId = useUser();

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const { data: response } = await axios.get(
          `${process.env.SWAGGER_API_URL}/conversations/${userId}`,
        );
        setConversations(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchConversations();
  }, []);

  const getConversationsReorganized = useCallback(
    (conversations: Conversation[]) => {
      const conversationsSortedByMostRecent = [...conversations].sort(
        (a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp,
      );

      return conversationsSortedByMostRecent.map((conversation) => {
        if (conversation.recipientId === Number(userId)) {
          return {
            ...conversation,
            recipientId: conversation.senderId,
            recipientNickname: conversation.senderNickname,
            senderId: conversation.recipientId,
            senderNickname: conversation.recipientNickname,
          };
        }

        return conversation;
      });
    },
    [userId],
  );

  return useMemo(
    () => ({
      loading: isLoading,
      conversations: getConversationsReorganized(conversations),
    }),
    [conversations, getConversationsReorganized, isLoading],
  );
}
