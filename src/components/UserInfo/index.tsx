import React from 'react';

import { 
    Container,
    Column,
    NameText,
    Progress,
    UserPicture 
} from './styles';
import { IUserInfo } from './types';

const UserInfo = ({nome, srcUserImg, percentual}: IUserInfo) => {
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