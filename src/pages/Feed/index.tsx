import React from 'react';

import { 
  Container,
  Column,
  Title,
  TitleHighlight,
} from './styles';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo';

const Feed = () => {
  return (
    <>
        <Header autenticado={true} srcUserImg='https://avatars.githubusercontent.com/u/70662154?v=4'/>
        <Container>
          <Column flex={3}>
            <Title>Feed</Title>
            <Card 
              srcProjectBg={'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
              srcUserPicture={'https://avatars.githubusercontent.com/u/70662154?v=4'}/>

              <Card 
              srcProjectBg={'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
              srcUserPicture={'https://avatars.githubusercontent.com/u/70662154?v=4'}/>

          </Column>
          
          <Column flex={1}>
            <TitleHighlight># Ranking 5 top da semana</TitleHighlight>
            <UserInfo percentual={40} nome="Victor Lira" srcUserImg={'https://avatars.githubusercontent.com/u/70662154?v=4'} />

            <UserInfo percentual={40} nome="Victor Lira" srcUserImg={'https://avatars.githubusercontent.com/u/70662154?v=4'} />

            <UserInfo percentual={40} nome="Victor Lira" srcUserImg={'https://avatars.githubusercontent.com/u/70662154?v=4'} />

            <UserInfo percentual={40} nome="Victor Lira" srcUserImg={'https://avatars.githubusercontent.com/u/70662154?v=4'} />

            <UserInfo percentual={40} nome="Victor Lira" srcUserImg={'https://avatars.githubusercontent.com/u/70662154?v=4'} />
          </Column>
        </Container>
    </>
    
  );
}

export {Feed};