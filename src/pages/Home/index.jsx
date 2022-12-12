import React from 'react';

import { 
  Container,
  TextContent,
  Title,
  TitleHighlight,
} from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';


const Home = () => {
  return (
    <>
        <Header />
        <Container>
          <div>
            <Title>
              <TitleHighlight>
                Implemente
                <br />
              </TitleHighlight>
              o seu futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts!
            </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={() => null}/>
          </div>
          <div>
            <img src={'https://ac-landing-pages-user-uploads-production.s3.amazonaws.com/0000051657/95ce2b2e-ccc0-40d8-ae56-65178fc030b9.png'} alt="imagem principal" />
          </div>
        </Container>
    </>
    
  );
}

export {Home};