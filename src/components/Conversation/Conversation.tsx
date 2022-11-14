import { memo, useContext } from 'react';
import { Col } from 'react-bootstrap';
import classNames from 'classnames';
import { HeaderConversation } from 'components/HeaderConversation.tsx';
import { FormMessage } from 'components/FormMessage';
import { Messages } from 'components/Messages';
import { ConversationLoading } from 'components/ConversationLoading';
import { useGetMessages } from './useGetMessages';
import styles from './Conversation.module.scss';
import { ConversationContext } from 'core/conversation';

function Conversation({
  sidebarOpened,
  onClickBackToSidebar,
}: {
  sidebarOpened: boolean;
  onClickBackToSidebar: () => void;
}): JSX.Element {
  const { state } = useContext(ConversationContext);
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
        ['d-none d-sm-block']: sidebarOpened,
      })}
    >
      {loading ? (
        <ConversationLoading />
      ) : (
        <>
          <HeaderConversation
            lastMessage={lastMessage}
            onClickBackToSidebar={onClickBackToSidebar}
          />
          <Messages messages={state.messages} />
          <FormMessage conversationSelected={state.conversationSelected} />
        </>
      )}
    </Col>
  );
}

export default memo(Conversation);
