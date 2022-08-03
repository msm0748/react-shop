import {useParams} from "react-router-dom";
import * as S from "../styles/Home.style.js";
import Card from "../components/Card.jsx";
import {useDispatch} from "react-redux";
import {sortItem} from "../store/rootSlice.js";

function Category({clothes}) {
	let {name} = useParams();
	const dispatch = useDispatch();
	return (
			<div className="wrap">
				<S.Button onClick={() => {
					dispatch(sortItem())
				}}>가격순으로</S.Button>
				<S.GoodsList>
					{name ? clothes.filter((v) => v.category === name).map((v) => (
							<S.GoodsItem key={v.id}>
								<Card clothes={v}/>
							</S.GoodsItem>
					)) : clothes.map((v) => (
							<S.GoodsItem key={v.id}>
								<Card clothes={v}/>
							</S.GoodsItem>))

					}
				</S.GoodsList>
			</div>

	)
}

export default Category;