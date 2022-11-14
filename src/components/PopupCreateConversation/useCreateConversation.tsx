import { useMemo, useCallback, useState, ChangeEvent, useContext } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
import { useUser } from 'core/user';
import { ConversationContext } from 'core/conversation';

export function useCreateConversation(): {
  userId: string;
  handleCreateConversation: (userId: string) => void;
  handleClickOption: (event: ChangeEvent<HTMLSelectElement>) => void;
} {
  const userIdLogged = useUser();
  const [userId, setUserId] = useState<string>(null);
  const { state } = useContext(ConversationContext);

  const handleClickOption = useCallback(
    (event: ChangeEvent<HTMLSelectElement>): void => {
      const { value } = event.currentTarget;
      setUserId(value);
    },
    [],
  );

  const createConversation = useCallback(async (userId: string) => {
    try {
      await axios
        .post(
          `${process.env.API_URL}/conversations/${userId}`,
          {
            recipientId: userIdLogged,
            recipientNickname: state.users.find(
              (user) => user.id === userIdLogged,
            ).nickname,
            senderId: Number(userId),
            senderNickname: state.users.find(
              (user) => user.id === Number(userId),
            ).nickname,
            lastMessageTimestamp: DateTime.now().toUnixInteger(),
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(
          (response) => console.log(response.data),
          //addConversation(response.data)
        );
    } catch (error) {
      console.warn(error.message);
    }
  }, []);

  return useMemo(
    () => ({
      userId,
      handleClickOption,
      handleCreateConversation: createConversation,
    }),
    [createConversation, handleClickOption, userId],
  );
}
