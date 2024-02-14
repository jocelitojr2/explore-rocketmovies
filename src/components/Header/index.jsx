import { useNavigate } from "react-router-dom";
import { Container, Brand, Search, Profile, Avatar } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { FiSearch, FiEdit2 } from "react-icons/fi";

import { Input } from '../../components/Input';

export function Header({ setSearch }){
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título" 
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)} 
        />
      </Search>

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <Link to="/" onClick={handleSignOut}>sair</Link>
        </div>

        <Avatar>
          <img 
            src={avatarUrl}
            alt={user.name}
          />

          <Link to="/profile" className="edit" >
            <FiEdit2 />
          </Link>
        </Avatar>
      </Profile>
    </Container>
  )
}