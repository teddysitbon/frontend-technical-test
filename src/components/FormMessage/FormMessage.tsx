import { ChangeEvent, memo, useCallback, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import styles from './FormMessage.module.scss';
import { useSendMessage } from './useSendMessage';

function FormMessage({
  conversationSelected,
}: {
  conversationSelected: number;
}): JSX.Element {
  const { value, handleChange, handleSendMessage } =
    useSendMessage(conversationSelected);

  function handleClick(): void {
    handleSendMessage(value);
  }

  return (
    <Row className={styles['container']}>
      <Form className={styles['form']}>
        <Form.Text
          className={styles['form__text']}
          as="textarea"
          placeholder="Enter Message"
          value={value}
          onChange={handleChange}
        />
        <Button
          className={styles['form__button']}
          variant="primary"
          type="button"
          onClick={handleClick}
        >
          Send
        </Button>
      </Form>
    </Row>
  );
}

export default memo(FormMessage);
