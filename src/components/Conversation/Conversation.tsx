import { memo, useContext } from 'react';
import { Col } from 'react-bootstrap';
import classNames from 'classnames';
import { ConversationContext } from 'core/conversation';
import { HeaderConversation } from 'components/HeaderConversation.tsx';
import { FormMessage } from 'components/FormMessage';
import { Messages } from 'components/Messages';
import { ConversationLoading } from 'components/ConversationLoading';
import { useGetMessages } from './useGetMessages';
import styles from './Conversation.module.scss';

function Conversation(): JSX.Element {
  const { state, toggleSidebar } = useContext(ConversationContext);
  const { loading } = useGetMessages(state.conversationSelected);
  const lastMessage = [...state.messages].pop();

  if (state.conversationSelected === null) {
    return (
      <Col sm={8} className={styles['conversation_empty']}>
        Select a conversation from the left :)
      </Col>
    );
  }

  return (
    <Col
      sm={8}
      className={classNames(styles['conversation'], {
        ['d-none d-sm-block']: state.sidebarOpened,
      })}
    >
      {loading ? (
        <ConversationLoading />
      ) : (
        <>
          <HeaderConversation
            lastMessage={lastMessage}
            toggleSidebar={toggleSidebar}
          />
          <Messages messages={state.messages} />
          <FormMessage conversationSelected={state.conversationSelected} />
        </>
      )}
    </Col>
  );
}

export default memo(Conversation);
