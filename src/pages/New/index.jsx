import { useEffect, useState } from "react";
import { Container, Content, ToGoBack, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi"

import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { api } from "../../services/api";

export function New(){
  const { user } = useAuth();
  const params = useParams();
  const movieId = params.id;

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
      return alert("Digite uma nota entre 1 e 5.");
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

  async function handleUpdateMovie() {
    if (!title) {
      return alert("Digite o título do filme.");
    }

    if (rating <= 0 || rating > 5) {
      return alert("Digite uma nota entre 1 e 5.");
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.");
    }

    await api.put(`/movies/${movieId}/${user.id}`, {
      title,
      description,
      rating,
      tags
    });

    alert("Filme Atualizado com sucesso!");
    navigate(-1);
  }

  async function handleMovieInformation() {
    const newTags = [];

    const { data } = await api.get(`/movies/${movieId}`);
    
    if (data.user_id === user.id) {
      setTitle(data.title);
      setRating(data.rating);
      setDescription(data.description);
      
      data.tags.forEach(tag => newTags.push(tag.name));
      setTags(newTags)
    } else {
      alert("Você não tem permissão para atualizar este filme.");
      navigate("/");
    }
  }

  async function handleDeleteMovie(movieId) {
    await api.delete(`/movies/${movieId}`);

    alert("Filme deletado com sucesso!");
    navigate(-1);
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    if (movieId) {
      handleMovieInformation();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId])

  return (
    <Container>
      <Header />
      <ToGoBack onClick={handleBack}>
        <FiArrowLeft />
        Voltar
      </ToGoBack>

      <Content>
        <Section title={movieId ? title : 'Novo Filme'}/>

        <main>
          <Form>
            <div className="inputs-w50">
              <Input 
                placeholder={"Título" }
                value = { title }
                onChange={e => setTitle(e.target.value)}
              />
              <Input 
                placeholder="Sua nota (de 0 a 5)" 
                type="number"
                value = { rating }
                onChange={e => setRating(e.target.value)}
              />
            </div>

            <Textarea
              placeholder={movieId ? description : 'Observações'}
              defaultValue={description}
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
              { movieId ? <Button title="Excluir filme" className="black" onClick={() => handleDeleteMovie(movieId)} /> : ''}
              <Button 
                title={ movieId ? 'Salvar alterações' : 'Salvar Filme'}
                onClick={ movieId ? handleUpdateMovie : handleNewMovie}
              />
            </div>
          </Form>
        </main>
      </Content>
    </Container>
  )
}