import { Container, Form, Background } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function Singin() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu lgoin</h2>

        <Input 
        placeholder={"E-mail"} 
        type="text" 
        icon={FiMail} 
        />
        
        <Input 
        placeholder={"Senha"} 
        type="password"  
        icon={FiLock} 
        />

        <Button title="Entrar" />

        <a href="#">
          Criar conta
        </a>
      </Form>

      <Background />
    </Container>
  )
}