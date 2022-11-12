import { memo } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import styles from './FormMessage.module.scss';

function FormMessage(): JSX.Element {
  return (
    <Row className={styles['container']}>
      <Form className={styles['form']}>
        <Form.Text
          className={styles['form__text']}
          as="textarea"
          placeholder="Enter Message"
        />
        <Button
          className={styles['form__button']}
          variant="primary"
          type="submit"
        >
          Send
        </Button>
      </Form>
    </Row>
  );
}

export default memo(FormMessage);
