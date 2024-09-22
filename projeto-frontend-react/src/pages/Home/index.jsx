import { Container, Form, ContainerInputs, Inputs, Label} from "./styles"
import TopBackground from "../../components/TopBackground"
import DefaultButton from "../../components/Button"
import DefaultTitle from "../../components/Title/style"

import api from '../../assets/services/api'

import { useNavigate } from "react-router-dom"
import { useRef } from "react"

function Home() {

  const nameValue = useRef()
  const ageValue = useRef()
  const emailValue = useRef()

  const navigate = useNavigate()

  async function addNewUser(){
    const data = await api.post('/users', {
      email: emailValue.current.value, 
      age: parseInt(ageValue.current.value),
      name: nameValue.current.value
    })

    nameValue.current.value = ""
    ageValue.current.value = ""
    emailValue.current.value = ""
  }


  return (
    <Container>
      
    <TopBackground></TopBackground>

      <Form>
        <DefaultTitle>Cadastro de Usuário</DefaultTitle>

        <ContainerInputs>
          <div>
            <div>
              <Label htmlFor="">Nome<span>*</span></Label>
            </div>
            <Inputs type="text" placeholder="Nome do usuário" ref={nameValue} />
          </div>

          <div>
            <div>
              <Label htmlFor="">Idade<span>*</span></Label>
            </div>
            <Inputs type="number" placeholder="Idade do usuário" ref={ageValue} />
          </div>

        </ContainerInputs>

        <div style={{width:'100%'}}>
          <div>
            <Label htmlFor="">E-mail<span>*</span></Label>
          </div>
          <Inputs type="email" name="" id="" placeholder="E-mail do usuário" ref={emailValue} />
        </div>
        <DefaultButton theme="primary" onClick={addNewUser} type="button">Cadastrar Usuário</DefaultButton>
      </Form>

      <DefaultButton type="button"  onClick={() => navigate('/user-list')}>Ver usuários</DefaultButton>

    </Container>
  )
}

export default Home
