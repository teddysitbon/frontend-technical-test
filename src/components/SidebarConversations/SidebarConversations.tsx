import { memo, useContext } from 'react';
import { Col } from 'react-bootstrap';
import classNames from 'classnames';
import { ConversationItem } from 'components/ConversationItem';
import { useGetConversations } from './useGetConversations';
import styles from './SidebarConversations.module.scss';
import { ConversationContext } from 'core/conversation';

function SidebarConversations({
  onClick,
  sidebarOpened,
}: {
  onClick: (id: number) => void;
  sidebarOpened: boolean;
}): JSX.Element {
  const { loading, conversations } = useGetConversations();
  const { state } = useContext(ConversationContext);

  return (
    <Col
      sm={4}
      className={classNames(styles['conversation'], {
        ['d-none d-sm-block']: !sidebarOpened,
      })}
    >
      {loading && <div>Loading</div>}
      {conversations.map((conversation) => (
        <ConversationItem
          conversation={conversation}
          key={conversation.id}
          onClick={onClick}
          active={state.conversationSelected === conversation.id}
        />
      ))}
    </Col>
  );
}

export default memo(SidebarConversations);
