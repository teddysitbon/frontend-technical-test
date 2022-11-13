import { memo } from 'react';
import classNames from 'classnames';
import { useUser } from 'core/user';
import { Message } from 'types/message';
import styles from './Message.module.scss';

function Message({ message }: { message: Message }): JSX.Element {
  const userId = useUser();

  return (
    <div
      className={classNames(styles['message'], {
        [styles[`message_receiver`]]: message.authorId === Number(userId),
      })}
    >
      {message.body}
    </div>
  );
}

export default memo(Message);
