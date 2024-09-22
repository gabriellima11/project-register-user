import { Container, ContainerUsers, CardUsers, TrashIcon, AvatarUser } from "./styles"
import DefaultButton from "../../components/Button"
import TopBackground from "../../components/TopBackground"
import DefaultTitle from "../../components/Title/style"

import TrashImg from '../../assets/trash.svg'

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import api from '../../assets/services/api'

const ListUsers = () => {

    const navigate = useNavigate();

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/users')
            setUsers(data)
        }
        getUsers()
    }, [])

    const deleteUsers = async (id) =>{
        await api.delete(`/users/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)
        setUsers(updatedUsers)
    }


    return (
        <Container>
            <TopBackground></TopBackground>
            <DefaultTitle>Lista de Usuários</DefaultTitle>

            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=[${user.id}]`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <p>{user.age}</p>
                        </div>
                        <TrashIcon onClick={() => deleteUsers(user.id)} src={TrashImg} alt="Trash Icon" />
                    </CardUsers>
                ))}
            </ContainerUsers>

            <DefaultButton type="button" onClick={() => navigate('/')}>Voltar</DefaultButton>
        </Container>
    )
}

export default ListUsers