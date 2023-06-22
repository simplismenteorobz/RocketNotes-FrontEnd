import { Container, Form } from "./styles"
import { Header } from "../../components/Header"
import { TextArea } from "../../components/TextArea"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem"

export function New() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar</a>
          </header>

          <Input placeholder="Título"/>
          <TextArea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem 
            value="https://github.com/"
            />
            <NoteItem 
            value=""
            isNew
            />
          </Section>
        </Form>
      </main>
    </Container>
  )
}