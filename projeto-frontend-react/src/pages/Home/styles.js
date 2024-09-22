import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    background-color: #181f36;
    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    max-width: 500px;
`

export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;
`

export const Inputs = styled.input`
    border-radius: 10px;
    background-color: #fff;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`

export const Label = styled.label`
    color: #fff;
    font-size: 12px;

    span{
        color: #ef4f45
 }
`

