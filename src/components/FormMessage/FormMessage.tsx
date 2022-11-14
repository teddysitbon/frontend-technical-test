import { memo, useCallback } from 'react';
import classNames from 'classnames';
import { Button, Form, Row } from 'react-bootstrap';
import { useSendMessage } from './useSendMessage';
import styles from './FormMessage.module.scss';

function FormMessage({
  conversationSelected,
}: {
  conversationSelected: number;
}): JSX.Element {
  const { value, handleChange, handleSendMessage } =
    useSendMessage(conversationSelected);

  const handleClick = useCallback(() => {
    handleSendMessage(value);
  }, [handleSendMessage, value]);

  return (
    <Row className={styles['container']}>
      <Form className={styles['form']}>
        <Form.Text
          className={styles['form__text']}
          as="textarea"
          placeholder="Enter a message"
          value={value}
          onChange={handleChange}
        />
        <Button
          className={classNames(styles['form__button'], {
            [styles['form__button_disabled']]: value === '',
          })}
          type="button"
          onClick={handleClick}
          disabled={value === ''}
        >
          Send
        </Button>
      </Form>
    </Row>
  );
}

export default memo(FormMessage);
