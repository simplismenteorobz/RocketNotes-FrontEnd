import { Container, Form } from "./styles"
import { Header } from "../../components/Header"
import { TextArea } from "../../components/TextArea"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

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
              placeholder="Novo link"
            />
          </Section>
         
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem 
                value="React"
              />
              <NoteItem 
                value=""
                isNew
                placeholder="Nova tag"
              />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}