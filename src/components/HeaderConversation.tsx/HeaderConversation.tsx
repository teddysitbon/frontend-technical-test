import { memo } from 'react';
import { DateTime } from 'luxon';
import { Col, Row } from 'react-bootstrap';
import { Message } from 'types/message';
import styles from './HeaderConversation.module.scss';

function HeaderConversation({
  lastMessage,
}: {
  lastMessage: Message;
}): JSX.Element {
  return (
    <Row className={styles['header']}>
      <Col sm={6} className={styles['header__name']}>
        Futur nom !
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
