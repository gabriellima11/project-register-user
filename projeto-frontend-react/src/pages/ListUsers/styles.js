import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    background-color: #181f36;
    padding: 10px;
    gap: 10px;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 30px 0;
    gap: 20px;

    @media (max-width: 1050px) {
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    border: 1px solid #fe7e5d;
    border-radius: 20px;
    background-color: #252d48;
    width: 25rem;
    display: flex;
    justify-content: space-between;
    padding: 20px;

    p{
        color: #ffffff;
        font-size: 18px;
        font-weight: 200;
        text-align: center;
    }

    h3{
        text-transform: capitalize;
        color: #ffffff;
        font-size: 22px;
        font-weight: 500;
        text-align: center;
    }
`

export const TrashIcon = styled.img`
    cursor: pointer;
`

export const AvatarUser = styled.img`
    width: 60px;
`