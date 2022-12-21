import React from 'react';
import { useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate()

    const handleClickSignIn = () => {
      navigate('/login');
    }

    const handleClickSignUp = () => {
        navigate('/cadastrar');
    }

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
                    <Button title="Entrar" onClick={handleClickSignIn}/>
                    <Button title="Cadastrar" onClick={handleClickSignUp}/>
                </>)}
                
            </Row>

        </Container>
    </Wrapper>
  );
}

export { Header };