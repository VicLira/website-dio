import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    height: 60vh;
    margin: 0 auto;
    margin-top: 140px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 370px;

    & > form {
        margin-top: 35px;
    }

    & > form > button {
        margin-top: 40px;
        margin-bottom: 27px;
    }
`;

export const Column = styled.div`
    width: auto;
    height: 100%;
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 388px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;
`;

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 360px;
    margin-bottom: 8px;
    line-height: 44px;
`;

export const SubtitleCadastro = styled.p`
    width: 100%;
    max-width: 372px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    color: #FFFFFF;
`;

export const LoginText = styled.p`
    width: 185px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    margin-top: 10px;

    color: #FFFFFF;

    & > a {
        color: #23DD7A;
        text-decoration: none;
    }
`;