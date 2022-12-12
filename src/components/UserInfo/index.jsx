import React from 'react';

import { 
    Container,
    Column,
    NameText,
    Progress,
    UserPicture 
} from './styles';

const UserInfo = ({nome, srcUserImg, percentual}) => {
  return (
    <Container>
        <UserPicture src={srcUserImg} />
        <Column>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual}/>
        </Column>
    </Container>
  );
}

export {UserInfo};