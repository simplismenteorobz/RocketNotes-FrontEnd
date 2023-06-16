import { Container, Links, Content } from './styles.js'

import { Button } from '../../components/Button/index.jsx'
import { ButtonText } from '../../components/ButtonText/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Section } from '../../components/Section/index.jsx'
import { Tag } from '../../components/Tag/index.jsx'

export function Details() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir a nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos qui blanditiis, voluptas harum repudiandae ratione
            repellat nihil quibusdam vero. Sint dolore tenetur,
            nisi possimus a deleniti dignissimos atque quaerat quam!
          </p>

          <Section  title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section  title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
    )
}




