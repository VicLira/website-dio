import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

import {  
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';
import { ICard } from './types';

const Card = ({srcProjectBg,srcUserPicture}: ICard) => {
  return (
    <CardContainer>
        <ImageBackground src={srcProjectBg}/>
        <Content>
            <UserInfo>
                <UserPicture src={srcUserPicture}/>
                <div>
                    <h4>Victor Lira</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio Inter</p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  );
}

export { Card };