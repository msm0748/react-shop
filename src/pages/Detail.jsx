import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice.js";
import * as S from "../styles/Detail.style.js";

function Detail({ shoes }) {
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState(true);
  const { id } = useParams();
  const currentShoes = shoes[id];

  const dispatch = useDispatch();

  const onChange = (e) => {
    setCount(e.target.value);
    if (e.target.value < 1) {
      setCount(1);
    }
  };

  const onCountUp = () => {
    setCount((current) => current + 1);
  };

  const onCountDown = () => {
    setCount((current) => current - 1);
  };

  useEffect(() => {
    if (count < 2) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [count]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(currentShoes);

  return (
    <div className="wrap">
      <S.DetailWrap>
        <S.DetailHead>
          <S.ImgWrap>
            <img src={shoes[id].imgSrc} alt={shoes[id].title} />
          </S.ImgWrap>
          <S.GoodsTit>
            <h4 className="pt-5">{shoes[id].title}</h4>
            <p>{(shoes[id].price * count).toLocaleString()}원</p>
            <S.ButtonWrap>
              <S.CountForm>
                <S.Input value={count} onChange={onChange} />
                <S.CountButtonWrap>
                  <S.CountButton onClick={onCountUp}>
                    더하기
                    <AiFillCaretUp size="12px" />
                  </S.CountButton>
                  <S.CountButton onClick={onCountDown} disabled={disabled}>
                    빼기
                    <AiFillCaretDown size="12px" />
                  </S.CountButton>
                </S.CountButtonWrap>
              </S.CountForm>

              <S.Button
                onClick={() => {
                  dispatch(addItem({ ...currentShoes, count: count }));
                }}
              >
                장바구니
              </S.Button>
              <S.Button bcColor="#346aff" color="#fff">
                주문하기
              </S.Button>
            </S.ButtonWrap>
          </S.GoodsTit>
        </S.DetailHead>
        <S.DetailBody>
          <p>{shoes[id].content}</p>
        </S.DetailBody>
      </S.DetailWrap>
    </div>
  );
}

export default Detail;
