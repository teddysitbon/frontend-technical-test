import { useState, useMemo, useCallback, ChangeEvent } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
import { useUser } from 'core/user';

export function useSendMessage(conversationId: number): {
  value: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSendMessage: any;
} {
  const [value, setValue] = useState<string>('');
  const userId = useUser();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { value } = event.target;
      setValue(value);
    },
    [],
  );

  const sendMessage = useCallback(async () => {
    try {
      await axios.post(
        `${process.env.API_URL}/messages/${conversationId}`,
        {
          body: value,
          timestamp: DateTime.now().toUnixInteger(),
          authorId: Number(userId),
          conversationId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setValue('');
    } catch (error) {
      console.error(error.message);
    }
  }, [conversationId, userId, value]);

  return useMemo(
    () => ({
      value,
      handleChange,
      handleSendMessage: sendMessage,
    }),
    [value, handleChange, sendMessage],
  );
}
