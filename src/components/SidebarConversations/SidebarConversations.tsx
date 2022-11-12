import { memo } from 'react';
import { Col } from 'react-bootstrap';
import { ConversationItem } from 'components/ConversationItem';
import { useGetConversations } from './useGetConversations';
import styles from './SidebarConversations.module.scss';

function SidebarConversations({
  conversationSelected,
  onClick,
}: {
  conversationSelected: number;
  onClick: (id: number) => void;
}): JSX.Element {
  const { loading, conversations } = useGetConversations();

  return (
    <Col sm={4} className={styles['conversation']}>
      {loading && <div>Loading</div>}
      {conversations.map((conversation) => (
        <ConversationItem
          conversation={conversation}
          key={conversation.id}
          onClick={onClick}
          active={conversationSelected === conversation.id}
        />
      ))}
    </Col>
  );
}

export default memo(SidebarConversations);
