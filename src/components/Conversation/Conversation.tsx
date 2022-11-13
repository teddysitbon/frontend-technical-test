import { memo } from 'react';
import { Col } from 'react-bootstrap';
import classNames from 'classnames';
import { HeaderConversation } from 'components/HeaderConversation.tsx';
import { FormMessage } from 'components/FormMessage';
import { Messages } from 'components/Messages';
import { ConversationLoading } from 'components/ConversationLoading';
import { useGetMessages } from './useGetMessages';
import styles from './Conversation.module.scss';

function Conversation({
  conversationSelected,
  sidebarOpened,
  onClickBackToSidebar,
}: {
  conversationSelected: number;
  sidebarOpened: boolean;
  onClickBackToSidebar: () => void;
}): JSX.Element {
  const { loading, messages } = useGetMessages(conversationSelected);
  const lastMessage = [...messages].pop();

  if (conversationSelected === null) {
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
          <Messages messages={messages} />
          <FormMessage conversationSelected={conversationSelected} />
        </>
      )}
    </Col>
  );
}

export default memo(Conversation);
