import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useUser } from 'core/user';
import { Conversation } from 'types/conversation';

export function useGetConversations(): {
  loading: boolean;
  conversations: Conversation[];
} {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const userId = useUser();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:3005/conversations/${userId}`,
        );
        setConversations(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const conversationSortedByMostRecent = [...conversations].sort(
    (a, b) => a.lastMessageTimestamp - b.lastMessageTimestamp,
  );

  const conversationReorganized = conversationSortedByMostRecent.map(
    (conversation) => {
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
    },
  );

  return useMemo(
    () => ({
      loading: isLoading,
      conversations: conversationReorganized,
    }),
    [conversationReorganized, isLoading],
  );
}
