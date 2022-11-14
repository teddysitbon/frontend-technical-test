import { memo, useCallback, useContext } from 'react';
import { DateTime } from 'luxon';
import { Button, Col, Row } from 'react-bootstrap';
import { Message } from 'types/message';
import styles from './HeaderConversation.module.scss';
import { ConversationContext } from 'core/conversation';

function HeaderConversation({
  lastMessage,
  toggleSidebar,
}: {
  lastMessage: Message;
  toggleSidebar: (isOpened: boolean) => void;
}): JSX.Element {
  const { state } = useContext(ConversationContext);

  const handleBackToSidebar = useCallback(() => {
    toggleSidebar(true);
  }, [toggleSidebar]);

  return (
    <Row className={styles['header']}>
      <Col sm={6} className={styles['header__name']}>
        <Button className="d-block d-sm-none" onClick={handleBackToSidebar}>
          Back
        </Button>
        <span>{state.nameConversationSelected}</span>
      </Col>
      <Col sm={6} className={styles['header__date']}>
        {lastMessage?.timestamp ? (
          <>
            {'Last message : '}
            {DateTime.fromSeconds(lastMessage.timestamp).toLocaleString(
              DateTime.DATETIME_MED,
            )}
          </>
        ) : (
          <>{'New conversation'}</>
        )}
      </Col>
    </Row>
  );
}

export default memo(HeaderConversation);
