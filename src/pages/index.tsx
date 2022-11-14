import { memo } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserProvider } from 'core/user';
import { ConversationProvider } from 'core/conversation';
import { SidebarConversations } from 'components/SidebarConversations';
import { Conversation } from 'components/Conversation';
import styles from './App.module.scss';

function Home(): JSX.Element {
  return (
    <UserProvider>
      <ConversationProvider>
        <Container className={styles['container']}>
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
