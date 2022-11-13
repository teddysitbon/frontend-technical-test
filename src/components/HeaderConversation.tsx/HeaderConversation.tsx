import { memo, useContext } from 'react';
import { DateTime } from 'luxon';
import { Button, Col, Row } from 'react-bootstrap';
import { Message } from 'types/message';
import styles from './HeaderConversation.module.scss';
import { ConversationContext } from 'core/conversation';

function HeaderConversation({
  lastMessage,
  onClickBackToSidebar,
}: {
  lastMessage: Message;
  onClickBackToSidebar: () => void;
}): JSX.Element {
  const { state } = useContext(ConversationContext);

  return (
    <Row className={styles['header']}>
      <Col sm={6} className={styles['header__name']}>
        <Button className="d-block d-sm-none" onClick={onClickBackToSidebar}>
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
