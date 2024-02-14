import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Content, NewNote } from "./styles";
import { FiPlus  } from "react-icons/fi";

import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { api } from "../../services/api";


export function Home(){
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleMoviesDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header setSearch={setSearch} />

      <Section title="Meus filmes">
        <NewNote to="/New">
          <FiPlus/>
          Adicionar filme
        </NewNote>
      </Section>

      <Content>
        {
          movies.map(movie => (
            <Note 
              key={String(movie.id)}
              data={movie} 
              onClick={() => handleMoviesDetails(movie.id)}
            />
          ))
        }
      </Content>
    </Container>
  )
}