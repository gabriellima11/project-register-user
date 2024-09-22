import styled from "styled-components";

export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : '1px solid #fe7e5d'} ;
    border-radius: 10px;
    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #FF6378 100%)' : 'transparent'};
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;

    &:hover{
        opacity: 0.8
    }

    &:active{
        opacity: 0.6
    }
`
