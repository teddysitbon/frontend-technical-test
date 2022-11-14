import { memo, useContext, useCallback } from 'react';
import { ConversationContext } from 'core/conversation';
import { Button, Form, Modal } from 'react-bootstrap';
import { useCreateConversation } from './useCreateConversation';

function PopupCreateConversation({
  onClose,
}: {
  onClose: () => void;
}): JSX.Element {
  const { state } = useContext(ConversationContext);
  const { userId, handleCreateConversation, handleClickOption } =
    useCreateConversation();

  function handleClick(): void {
    handleCreateConversation(userId);
  }

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a conversation</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          Select a user
          <Form.Select aria-label="Select a user" onChange={handleClickOption}>
            {state.users.map((user) => (
              <option
                value={user.id}
                key={user.id}
                selected={user.id === Number(userId)}
              >
                {user.nickname}
              </option>
            ))}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Create
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default memo(PopupCreateConversation);
