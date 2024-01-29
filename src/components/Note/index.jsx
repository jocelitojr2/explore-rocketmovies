import { Container } from "./styles";
import { FaStar , FaRegStar  } from "react-icons/fa";

import { Tag } from "../Tag";

export function Note({ data, ...rest }){
  const stars = ConvertRatingInStart(data.rating);

  function ConvertRatingInStart(stars) {
    let html = [];

    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        html.push( <FaStar key={i}/> )
      } else {
        html.push(<FaRegStar key={i}/>)
      }
    }

    return html
  }

  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      <div className="stars">
        {
          stars
        }
      </div>

      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
          }
        </footer>
      }

    </Container>
  )
}