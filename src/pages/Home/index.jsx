import { Container, Content, NewNote } from "./styles";
import { FiPlus  } from "react-icons/fi";

import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Note } from '../../components/Note';

export function Home(){
  return (
    <Container>
      <Header />

      <Section title="Meus filmes">
        <NewNote to="/New">
          <FiPlus/>
          Adicionar filme
        </NewNote>
      </Section>

      <Content>
        <Note data={{
          title: 'React',
          description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.',
          rating: 6,
          tags: [
            {id: '1', name: 'React'},
            {id: '2', name: 'Rocketseat'}
          ]
        }}>
        </Note>
        <Note data={{
          title: 'React',
          description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.',
          rating: 5,
          tags: [
            {id: '1', name: 'React'},
            {id: '2', name: 'Rocketseat'}
          ]
        }}>
        </Note>
        <Note data={{
          title: 'React',
          description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.',
          rating: 4,
          tags: [
            {id: '1', name: 'React'},
            {id: '2', name: 'Rocketseat'}
          ]
        }}>
        </Note>
        <Note data={{
          title: 'React',
          description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.',
          rating: 3,
          tags: [
            {id: '1', name: 'React'},
            {id: '2', name: 'Rocketseat'}
          ]
        }}>
        </Note>
        <Note data={{
          title: 'React',
          description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.',
          rating: 2,
          tags: [
            {id: '1', name: 'React'},
            {id: '2', name: 'Rocketseat'}
          ]
        }}>
        </Note>
        <Note data={{
          title: 'React',
          description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.',
          rating: 1,
          tags: [
            {id: '1', name: 'React'},
            {id: '2', name: 'Rocketseat'}
          ]
        }}>
        </Note>
      </Content>
    </Container>
  )
}