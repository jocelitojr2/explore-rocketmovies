import { useState } from "react";
import { Container, Content, ToGoBack, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi"

import { useNavigate } from "react-router-dom";

import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { api } from "../../services/api";

export function New(){
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Digite o título do filme.");
    }

    if (rating <= 0 || rating > 5) {
      return alert("Digite uma nota entre 0 e 5.");
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.");
    }

    await api.post("/movies", {
      title,
      description,
      rating,
      tags
    });

    alert("Filme criado com sucesso!");
    navigate(-1);
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      <ToGoBack onClick={handleBack}>
        <FiArrowLeft />
        Voltar
      </ToGoBack>

      <Content>
        <Section title="Novo filme"/>

        <main>
          <Form>
            <div className="inputs-w50">
              <Input 
                placeholder="Título" 
                onChange={e => setTitle(e.target.value)}
              />
              <Input 
                placeholder="Sua nota (de 0 a 5)" 
                type="number"
                onChange={e => setRating(e.target.value)}
              />
            </div>

            <Textarea
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />

            <Section title="Marcadores">
              <div className="tags">
                {
                  tags.map((tag, index) => (
                    <NoteItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }

                <NoteItem 
                  isNew
                  placeholder="Novo marcador"
                  onChange={e => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </div>
            </Section>

            <div className="buttons">
              <Button title="Excluir filme" className="black"/>
              <Button 
                title="Salvar alterações"
                onClick={handleNewMovie}
              />
            </div>
          </Form>
        </main>
      </Content>
    </Container>
  )
}