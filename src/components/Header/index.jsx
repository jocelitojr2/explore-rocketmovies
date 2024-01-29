import { Container, Brand, Search, Profile, Avatar } from "./styles";
import { Link } from "react-router-dom";

import { FiSearch, FiEdit2 } from "react-icons/fi";

import { Input } from '../../components/Input';

export function Header(){
  return(
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Profile to="/profile">
        <div>
          <strong>Jocelito Junior</strong>
          <Link to="/">sair</Link>
        </div>

        <Avatar>
          <img 
            src="https://github.com/jocelitojr2.png" 
            alt="Foto do usuário" 
          />

          <Link to="/profile" className="edit" >
            <FiEdit2 />
          </Link>
        </Avatar>
      </Profile>
    </Container>
  )
}