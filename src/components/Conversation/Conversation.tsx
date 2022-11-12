import { memo } from 'react';
import { Col } from 'react-bootstrap';
import { HeaderConversation } from 'components/HeaderConversation.tsx';
import { FormMessage } from 'components/FormMessage';
import { Messages } from 'components/Messages';
import { useGetMessages } from './useGetMessages';
import styles from './Conversation.module.scss';

function Conversation({
  conversationSelected,
}: {
  conversationSelected: number;
}): JSX.Element {
  console.log(conversationSelected);
  const { loading, messages } = useGetMessages(conversationSelected);
  const lastMessage = [...messages].pop();
  console.log(messages);

  if (conversationSelected === null) {
    return (
      <Col sm={8} className={styles['conversation_empty']}>
        Select a conversation from the left :)
      </Col>
    );
  }

  return (
    <Col sm={8} className={styles['conversation']}>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <HeaderConversation lastMessage={lastMessage} />
          <Messages messages={messages} />
          <FormMessage />
        </>
      )}
    </Col>
  );
}

export default memo(Conversation);
