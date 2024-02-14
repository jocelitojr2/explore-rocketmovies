
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, ToGoBack, MovieTitle, MovieInfo } from "./styles";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { FaStar , FaRegStar } from "react-icons/fa";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { api } from "../../services/api";

import { Header } from "../../components/Header"
import { Tag } from '../../components/Tag';

export function Details() {
  const navigate = useNavigate();
  const params = useParams();

  const movieId = params.id;

  const [movieData, setMovieData] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const avatarUrl = userInfo.avatar ? `${api.defaults.baseURL}/files/${userInfo.avatar}` : avatarPlaceholder;

  const RatingStars = ({ rating }) => {
    // Cria um array de componentes de estrelas com base no rating
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
  
    return <div className="stars">{stars}</div>;
  };

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function movieDetails() {
      try {
        const movie = await api.get(`/movies/${movieId}`)
        
        const { data } = movie;

        setMovieData(data);

        setUserInfo(data.userInfo);
        
      } catch (error) {
        alert("Erro ao buscar detalhes do filme!")
      }
    }

    movieDetails();
  }, [movieId]);

  return (
    <Container>
      <Header />

      <ToGoBack onClick={handleBack}>
        <FiArrowLeft />
        Voltar
      </ToGoBack>

      <main>
        <MovieTitle>
          <h2>{movieData.title}</h2>
          <RatingStars rating={movieData.rating} />

        </MovieTitle>

        <MovieInfo>
          <img 
            src={avatarUrl}
            alt={userInfo.name}
          />
          <span>{userInfo.name}</span>
          <FiClock />
          <span>{movieData.created_at}</span>
        </MovieInfo>
    
        <div className="tags">
          { 
            movieData.tags &&
            movieData.tags.map((tag, index) => <Tag title={tag.name} key={index}/>)
          }
        </div>

        <p>
          {movieData.description}
        </p>
      </main>
    </Container>
  )
}