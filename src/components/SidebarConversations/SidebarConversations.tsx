import { memo, useCallback, useContext, useState } from 'react';
import { Col } from 'react-bootstrap';
import classNames from 'classnames';
import { ConversationItem } from 'components/ConversationItem';
import { useGetConversations } from './useGetConversations';
import styles from './SidebarConversations.module.scss';
import { ConversationContext } from 'core/conversation';

function SidebarConversations(): JSX.Element {
  const { loading, conversations } = useGetConversations();
  const { state } = useContext(ConversationContext);

  return (
    <Col
      sm={4}
      className={classNames(styles['conversation'], {
        ['d-none d-sm-block']: !state.sidebarOpened,
      })}
    >
      {loading && <div>Loading</div>}
      {conversations.map((conversation) => (
        <ConversationItem
          conversation={conversation}
          key={conversation.id}
          active={state.conversationSelected === conversation.id}
        />
      ))}
    </Col>
  );
}

export default memo(SidebarConversations);
