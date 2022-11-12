import classNames from 'classnames';
import { memo, useContext } from 'react';
import { Col } from 'react-bootstrap';
import styles from './Avatar.module.scss';
import { useUser } from 'core/user';

function Avatar({ name }: { name: string }): JSX.Element {
  const initialName = name.charAt(0);

  return (
    <Col sm={3}>
      <div className={styles['avatar']}>
        <span className={styles['avatar__name']}>{initialName}</span>
      </div>
    </Col>
  );
}

export default memo(Avatar);
