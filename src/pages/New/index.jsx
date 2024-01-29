import { Container, Content, ToGoBack, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi"

import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

export function New(){
  return (
    <Container>
      <Header />
      <ToGoBack to="/">
        <FiArrowLeft />
        Voltar
      </ToGoBack>

      <Content>
        <Section title="Novo filme"/>

        <main>
          <Form>
            <div className="inputs-w50">
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" type="number"/>
            </div>

            <Textarea
              placeholder="Observações"
            />

            <Section title="Marcadores">
              <div className="tags">
                <NoteItem  value="react"/>
                <NoteItem isnew="true" placeholder="Novo marcador"/>
              </div>
            </Section>

            <div className="buttons">
              <Button title="Excluir filme" className="black"/>
              <Button title="Salvar alterações" />
            </div>
          </Form>
        </main>
      </Content>
    </Container>
  )
}