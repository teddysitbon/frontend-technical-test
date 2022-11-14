import { memo } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserProvider } from 'core/user';
import { ConversationProvider } from 'core/conversation';
import { SidebarConversations } from 'components/SidebarConversations';
import { Conversation } from 'components/Conversation';

function Home(): JSX.Element {
  return (
    <UserProvider>
      <ConversationProvider>
        <Container fluid className="h-100">
          <Row className="h-100">
            <SidebarConversations />
            <Conversation />
          </Row>
        </Container>
      </ConversationProvider>
    </UserProvider>
  );
}

export default memo(Home);
