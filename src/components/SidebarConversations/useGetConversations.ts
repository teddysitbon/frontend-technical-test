import { useState, useEffect, useMemo, useCallback, useContext } from 'react';
import axios from 'axios';
import { useUser } from 'core/user';
import { Conversation } from 'types/conversation';
import { ConversationContext } from 'core/conversation';

export function useGetConversations(): {
  loading: boolean;
  conversations: Conversation[];
} {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const userId = useUser();
  const { updateUsers } = useContext(ConversationContext);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const { data: response } = await axios.get(
          `${process.env.API_URL}/conversations/${userId}`,
        );
        setConversations(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchConversations();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await axios
          .get(`${process.env.API_URL}/users`)
          .then((response) => updateUsers(response.data));
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUsers();
  }, []);

  const getConversationsReorganized = useCallback(
    (conversations: Conversation[]) => {
      const conversationsSortedByMostRecent = [...conversations].sort(
        (a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp,
      );

      return conversationsSortedByMostRecent.map((conversation) => {
        if (conversation.recipientId === userId) {
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
