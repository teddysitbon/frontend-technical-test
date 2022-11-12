import { memo } from 'react';
import { Col } from 'react-bootstrap';
import { ConversationItem } from 'components/ConversationItem';
import { useGetConversations } from './useGetConversations';
import styles from './SidebarConversations.module.scss';

function SidebarConversations(): JSX.Element {
  const { loading, conversations } = useGetConversations();
  console.log(loading);

  return (
    <Col sm={4} className={styles['conversation']}>
      {loading && <div>Loading</div>}
      {conversations.map((conversation) => (
        <ConversationItem conversation={conversation} key={conversation.id} />
      ))}
    </Col>
  );
}

export default memo(SidebarConversations);
