import { memo } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserProvider } from 'core/user';
import { SidebarConversations } from 'components/SidebarConversations';

function Home(): JSX.Element {
  return (
    <UserProvider>
      <Container fluid className="p-0 overflow-hidden h-100">
        <Row className="h-100">
          <SidebarConversations />
        </Row>
      </Container>
    </UserProvider>
  );
}

export default memo(Home);
