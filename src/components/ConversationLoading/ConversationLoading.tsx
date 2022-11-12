import { memo } from 'react';
import { Row } from 'react-bootstrap';
import styles from './ConversationLoading.module.scss';

function ConversationLoading(): JSX.Element {
  return (
    <div className={styles['loader']}>
      <Row className={styles['loader__header']} />
      <Row className={styles['loader__message']} />
      <Row className={styles['loader__footer']} />
    </div>
  );
}

export default memo(ConversationLoading);
