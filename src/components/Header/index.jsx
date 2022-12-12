import React from 'react';
import { Button } from '../Button';

import logoDio from '../../assets/logo-dio.png';

import { 
    Container,
    BuscarInputContainer,
    Column,
    Input,
    Menu, 
    MenuRight,
    Row,
    UserPicture,
    Wrapper,
} from './styles';

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logoDio} alt="logo digital innovation one" width={64} height={64} />
                <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>

        </Container>
    </Wrapper>
  );
}

export { Header };