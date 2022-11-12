import { memo } from 'react';
import { DateTime } from 'luxon';
import { Button, Col, Row } from 'react-bootstrap';
import { Avatar } from 'components/Avatar';
import { Conversation } from 'types/conversation';
import styles from './ConversationItem.module.scss';

function ConversationItem({
  conversation,
}: {
  conversation: Conversation;
}): JSX.Element {
  const date = DateTime.fromSeconds(
    conversation.lastMessageTimestamp,
  ).toLocaleString({ month: 'long', day: '2-digit' });

  return (
    <Row className={styles['conversation']}>
      <Button
        variant="light"
        size="lg"
        className={styles['conversation__button']}
      >
        <Row>
          <Avatar sm-hide name={conversation.recipientNickname} />
          <Col sm={6} className={styles['conversation__name']}>
            {conversation.recipientNickname}
          </Col>
          <Col sm={3} className={styles['conversation__date']}>
            {date}
          </Col>
        </Row>
      </Button>
    </Row>
  );
}

export default memo(ConversationItem);
