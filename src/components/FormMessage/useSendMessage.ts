import { useState, useMemo, useCallback, ChangeEvent, useContext } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
import { useUser } from 'core/user';
import { ConversationContext } from 'core/conversation';

export function useSendMessage(conversationId: number): {
  value: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSendMessage: (value: string) => Promise<void>;
} {
  const [value, setValue] = useState<string>('');
  const userId = useUser();
  const { addMessage } = useContext(ConversationContext);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { value } = event.target;
      setValue(value);
    },
    [],
  );

  const sendMessage = useCallback(async () => {
    try {
      await axios
        .post(
          `${process.env.API_URL}/messages/${conversationId}`,
          {
            body: value,
            timestamp: DateTime.now().toUnixInteger(),
            authorId: userId,
            conversationId,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then((response) => addMessage(response.data));

      setValue('');
    } catch (error) {
      console.warn(error.message);
    }
  }, [addMessage, conversationId, userId, value]);

  return useMemo(
    () => ({
      value,
      handleChange,
      handleSendMessage: sendMessage,
    }),
    [value, handleChange, sendMessage],
  );
}
