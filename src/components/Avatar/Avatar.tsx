import { memo } from 'react';
import classNames from 'classnames';
import { Col } from 'react-bootstrap';
import styles from './Avatar.module.scss';

function Avatar({
  name,
  active,
}: {
  name: string;
  active: boolean;
}): JSX.Element {
  const initialName = name.charAt(0);

  return (
    <Col sm={3}>
      <div className={styles['avatar']}>
        <span
          className={classNames(styles['avatar__name'], {
            [styles['avatar__name_active']]: active,
          })}
        >
          {initialName}
        </span>
      </div>
    </Col>
  );
}

export default memo(Avatar);
