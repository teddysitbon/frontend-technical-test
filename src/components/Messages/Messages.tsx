import { memo } from 'react';
import { Row } from 'react-bootstrap';
import { Message } from 'components/Message';
import { Message as TypeMessage } from 'types/message';
import styles from './Messages.module.scss';

function Messages({ messages }: { messages: TypeMessage[] }): JSX.Element {
  return (
    <Row className={styles['container']}>
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </Row>
  );
}

export default memo(Messages);
