import { memo } from 'react';
import Head from 'next/head';
import { Container, Row } from 'react-bootstrap';
import { UserProvider } from 'core/user';
import { ConversationProvider } from 'core/conversation';
import { SidebarConversations } from 'components/SidebarConversations';
import { Conversation } from 'components/Conversation';
import styles from './App.module.scss';

function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Frontend Technical test, by Teddy - Leboncoin</title>
        <meta
          name="description"
          content="Frontend exercise developped by Teddy, for Le"
        ></meta>
      </Head>
      <main className="h-100">
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
      </main>
    </>
  );
}

export default memo(Home);
