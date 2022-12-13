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

const Header = ({autenticado, srcUserImg}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logoDio} alt="logo digital innovation one" width={64} height={64} />
                {autenticado ? (<>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>) : null}
                
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src={srcUserImg} />
                ) : (<>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                </>)}
                
            </Row>

        </Container>
    </Wrapper>
  );
}

export { Header };