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
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 380px;
`;

export const Column = styled.div`
    width: auto;
`;

export const Row = styled.div`
    max-width: 280px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 565px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;
`;

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
`;

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`;

export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #e5e044;
`;

export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #e23DD7;
`;