import React from 'react';

import { MdEmail, MdLock} from 'react-icons/md'

import { 
  Container,
  Title,
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  TitleLogin,
  Wrapper,
} from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';


const Login = () => {
  return (
    <>
        <Header />
        <Container>
          <Column>
            <Title>
              A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Faça seu cadastro</TitleLogin>
              <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
              <form>
                <Input placeholder="E-mail" type="email" leftIcon={<MdEmail />}/>
                <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                <Button title="Entrar" variant='secondary' onClick={() => null} />
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar conta</CriarText>
              </Row>
            </Wrapper>
          </Column>
        </Container>
    </>
    
  );
}

export { Login };