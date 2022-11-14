import { memo, useContext } from 'react';
import { Col } from 'react-bootstrap';
import Image from 'next/image';
import classNames from 'classnames';
import { ConversationContext } from 'core/conversation';
import Logo from 'assets/lbc-logo.webp';
import Communaute from 'assets/communaute.png';
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

  console.log(state.conversationSelected);

  if (state.conversationSelected === null) {
    return (
      <Col sm={8} className={styles['conversation_empty']}>
        <Image
          src={Logo}
          alt="Leboncoin Frontend Team"
          width={192}
          height={60}
          className={styles['image__logo']}
        />
        Select a conversation from the left
        <Image
          src={Communaute}
          alt="Leboncoin Community"
          className={styles['image__community']}
        />
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
