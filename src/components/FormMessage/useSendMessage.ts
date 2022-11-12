import { useState, useEffect, useMemo, useCallback, ChangeEvent } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
import { useUser } from 'core/user';
import { Conversation } from 'types/conversation';

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
      const { data: response } = await axios.post(
        `http://localhost:3005/conversation/${conversationId}`,
        {
          body: value,
          timestamp: DateTime.now(),
          authorId: userId,
          conversationId,
        },
      );
      console.log(response);
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
