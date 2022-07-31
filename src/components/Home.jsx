import * as S from "../styles/Home.style";
import Card from "./Card.jsx";

function Home({ clothes }) {
  return (
    <div className="wrap">
      <S.GoodsList>
        {clothes.map((v, i) => (
          <S.GoodsItem key={i}>
            <Card clothes={v} i={i} />
          </S.GoodsItem>
        ))}
      </S.GoodsList>
    </div>
  );
}

export default Home;
