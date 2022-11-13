import { memo } from 'react';
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
