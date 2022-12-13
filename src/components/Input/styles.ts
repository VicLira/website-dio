import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #383450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const IconContainer = styled.div`
    margin-left: 10px;
`;

export const InputText = styled.input`
    width: 100%;
    margin-left: 10px;
    background-color: transparent;
    color: #fff;
    border: 0;
    height: 30px;
`;

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin: 5px 0;
`;