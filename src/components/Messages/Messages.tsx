import { memo, useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Message } from 'components/Message';
import { Message as TypeMessage } from 'types/message';
import styles from './Messages.module.scss';
import { ConversationContext } from 'core/conversation';

function Messages({ messages }: { messages: TypeMessage[] }): JSX.Element {
  const { state } = useContext(ConversationContext);

  return (
    <Row className={styles['container']}>
      {state.messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </Row>
  );
}

export default memo(Messages);
