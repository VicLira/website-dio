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
import { IHeader } from './types';

const Header = ({autenticado, srcUserImg}: IHeader) => {
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
                    <Button title="Entrar" onClick={() => null}/>
                    <Button title="Cadastrar" onClick={() => null}/>
                </>)}
                
            </Row>

        </Container>
    </Wrapper>
  );
}

export { Header };