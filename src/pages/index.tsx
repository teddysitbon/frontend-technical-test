import { memo, useCallback, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserProvider } from 'core/user';
import { SidebarConversations } from 'components/SidebarConversations';
import { Conversation } from 'components/Conversation';
import { ConversationProvider } from 'core/conversation';

function Home(): JSX.Element {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(true);

  const handleClickConversation = useCallback((id: number) => {
    setSidebarOpened(false);
  }, []);

  const handleClickBackToSidebar = useCallback(() => {
    setSidebarOpened(true);
  }, []);

  return (
    <UserProvider>
      <ConversationProvider>
        <Container fluid className="h-100">
          <Row className="h-100">
            <SidebarConversations
              onClick={handleClickConversation}
              sidebarOpened={sidebarOpened}
            />
            <Conversation
              sidebarOpened={sidebarOpened}
              onClickBackToSidebar={handleClickBackToSidebar}
            />
          </Row>
        </Container>
      </ConversationProvider>
    </UserProvider>
  );
}

export default memo(Home);
