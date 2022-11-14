import { memo, useContext, useState, useCallback } from 'react';
import { Button, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { ConversationContext } from 'core/conversation';
import { ConversationItem } from 'components/ConversationItem';
import { PopupCreateConversation } from 'components/PopupCreateConversation';
import { useGetConversations } from './useGetConversations';
import styles from './SidebarConversations.module.scss';

function SidebarConversations(): JSX.Element {
  const [isModalOpened, setModalOpened] = useState<boolean>(false);
  const { loading, conversations } = useGetConversations();
  const { state } = useContext(ConversationContext);

  const handleOpenPopup = useCallback(() => {
    setModalOpened(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    setModalOpened(false);
  }, []);

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
      <Button className={styles['button']} onClick={handleOpenPopup}>
        Create a conversation
      </Button>
      <div
        className={classNames(
          styles['conversation__footer'],
          'd-block d-sm-none',
        )}
      >
        Select a conversation
      </div>
      {isModalOpened && <PopupCreateConversation onClose={handleClosePopup} />}
    </Col>
  );
}

export default memo(SidebarConversations);
