import { Background } from "./styles"

import UsersBackground from '../../assets/users.png'

const TopBackground = () =>{
    return(
        <Background>
            <img src={UsersBackground} alt="" />
        </Background>
    )
}

export default TopBackground