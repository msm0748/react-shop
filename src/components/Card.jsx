import { Link } from "react-router-dom";
import * as S from "../styles/Card.style.js";

function Card({ shoes, i }) {
  return (
    <>
      <Link to={`/detail/${i}`}>
        <div>
          <img src={shoes.imgSrc} alt={shoes.title} />
        </div>
        <h4>{shoes.title}</h4>
        <p>{shoes.price.toLocaleString()}원</p>
        <S.Ellipsis>{shoes.content}</S.Ellipsis>
      </Link>
    </>
  );
}

export default Card;
