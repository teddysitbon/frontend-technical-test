import { memo, useCallback, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserProvider } from 'core/user';
import { SidebarConversations } from 'components/SidebarConversations';
import { Conversation } from 'components/Conversation';

function Home(): JSX.Element {
  const [conversationId, setConversationId] = useState<number>(null);
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(true);

  const handleClickConversation = useCallback((id: number) => {
    setConversationId(id);
    setSidebarOpened(false);
  }, []);

  const handleClickBackToSidebar = useCallback(() => {
    setConversationId(-1);
    setSidebarOpened(true);
  }, []);

  return (
    <UserProvider>
      <Container fluid className="h-100">
        <Row className="h-100">
          <SidebarConversations
            conversationSelected={conversationId}
            onClick={handleClickConversation}
            sidebarOpened={sidebarOpened}
          />
          <Conversation
            conversationSelected={conversationId}
            sidebarOpened={sidebarOpened}
            onClickBackToSidebar={handleClickBackToSidebar}
          />
        </Row>
      </Container>
    </UserProvider>
  );
}

export default memo(Home);
