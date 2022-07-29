import * as S from "./Home.style";
import Card from "./Card.jsx";

function Home({shoes}) {
	return (
			<div className="wrap">
				<S.GoodsList>
					{shoes.map((v, i) => (
							<S.GoodsItem key={i}>
								<Card shoes={v} i={i}/>
							</S.GoodsItem>
					))}
				</S.GoodsList>
			</div>
	);
}

export default Home;
