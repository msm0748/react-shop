import {Link} from "react-router-dom";
import * as S from "../styles/Card.style.js";

function Card({clothes}) {

	return (
			<>
				<Link to={`/detail/${clothes.id}`}>
					<div>
						<img src={clothes.imgSrc} alt={clothes.title}/>
					</div>
					<h4>{clothes.title}</h4>
					<p>{clothes.price.toLocaleString()}원</p>
					<S.Ellipsis>{clothes.content}</S.Ellipsis>
				</Link>
			</>
	);
}

export default Card;
