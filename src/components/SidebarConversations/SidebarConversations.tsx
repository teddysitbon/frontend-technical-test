import { memo, useCallback, useContext, useState } from 'react';
import { Col } from 'react-bootstrap';
import classNames from 'classnames';
import { ConversationContext } from 'core/conversation';
import { ConversationItem } from 'components/ConversationItem';
import { useGetConversations } from './useGetConversations';
import styles from './SidebarConversations.module.scss';

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
      {conversations.map((conversation) => (
        <ConversationItem
          conversation={conversation}
          key={conversation.id}
          active={state.conversationSelected === conversation.id}
        />
      ))}
      <div
        className={classNames(
          styles['conversation__footer'],
          'd-block d-sm-none',
        )}
      >
        Select a conversation
      </div>
    </Col>
  );
}

export default memo(SidebarConversations);
