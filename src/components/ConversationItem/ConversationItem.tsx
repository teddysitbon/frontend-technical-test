import { memo, MouseEventHandler, useCallback } from 'react';
import { DateTime } from 'luxon';
import { Button, Col, Row } from 'react-bootstrap';
import { Avatar } from 'components/Avatar';
import { Conversation } from 'types/conversation';
import styles from './ConversationItem.module.scss';

function ConversationItem({
  conversation,
  onClick,
  active,
}: {
  conversation: Conversation;
  onClick: (id: number) => void;
  active: boolean;
}): JSX.Element {
  const date = DateTime.fromSeconds(
    conversation.lastMessageTimestamp,
  ).toLocaleString({ month: 'long', day: '2-digit' });

  const handleClickConversation = useCallback(() => {
    onClick(conversation.id);
  }, [conversation.id, onClick]);

  return (
    <Row className={styles['conversation']} onClick={handleClickConversation}>
      <Button
        variant="light"
        size="lg"
        className={styles['conversation__button']}
        active={active}
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
