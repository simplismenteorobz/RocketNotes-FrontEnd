import { Container, Form, Avatar } from "./styles"
import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi"

import { Input } from "../../components/Input"

export function Profile() {
  return(
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img 
          src="https://github.com/simplismenteorobz.png" 
          alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input 
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        <Input 
        placeholder={"Nome"} 
        type="text" 
        icon={FiUser} 
        />
        
        <Input 
        placeholder={"E-mail"} 
        type="text" 
        icon={FiMail} 
        />
        
        <Input 
        placeholder={"Senha atual"} 
        type="password"  
        icon={FiLock} 
        />
        
        <Input 
        placeholder={"Nova senha"} 
        type="password"  
        icon={FiLock} 
        />
      </Form>
    </Container>
  )
}