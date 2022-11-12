import { memo, useCallback, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserProvider } from 'core/user';
import { SidebarConversations } from 'components/SidebarConversations';
import { Conversation } from 'components/Conversation';

function Home(): JSX.Element {
  const [conversationId, setConversationId] = useState<number>(null);

  const handleClickConversation = useCallback((id: number) => {
    setConversationId(id);
  }, []);

  return (
    <UserProvider>
      <Container fluid className="h-100">
        <Row className="h-100">
          <SidebarConversations
            conversationSelected={conversationId}
            onClick={handleClickConversation}
          />
          <Conversation conversationSelected={conversationId} />
        </Row>
      </Container>
    </UserProvider>
  );
}

export default memo(Home);
