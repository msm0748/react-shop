import { useEffect, useState } from "react";
import * as S from "../styles/Cart.style.js";
import {Button} from "../styles/Detail.style.js";
import { useSelector, useDispatch } from "react-redux";
import { addCount, minusCount, deleteItem, paymentChecked, paymentAllChecked } from "../store/cartSlice.js";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cart() {
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  const [allCheck, setAllCheck] = useState(true);

  const isAllChecked = () => {
	  const checkData = cart.some((a) => {
		  return a.checked === false;
	  })
	  if(checkData){
		  setAllCheck(false);
	  }else{
		  setAllCheck(true);
	  }
  }
  useEffect(() => {
	  isAllChecked();
	  //수량때문에 의미없는 렌더링 일어남 수정필요
  }, [cart])

  return (
    <>
      <div className="wrap">
        <S.Table>
          <colgroup>
            <col style={{ width: "100px" }} />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th><label htmlFor="checkbox"><input type="checkbox" id="checkbox" checked={allCheck} onClick={(e) => {
	              const check = e.target.checked;
	              dispatch(paymentAllChecked(check));
              }}/>전체선택</label></th>
              <th colSpan="2">상품정보</th>
              <th>상품금액</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => (
              <tr key={i}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onClick={(e) => {
                      const check = e.target.checked;
                      dispatch(paymentChecked({ ...item, checked: check }));
                    }}
                  />
                </td>
                <td>
                  <img src={item.imgSrc} alt={item.title} />
                </td>
                <td>
                  <div>{item.title}</div>
                </td>
                <td>{(item.price * item.count).toLocaleString()}원</td>
                <td>
                  <S.CountForm>
                    <S.Input value={item.count} />
                    <S.CountButtonWrap>
                      <S.CountButton
                        onClick={() => {
                          dispatch(addCount(item.id));
                        }}
                      >
                        더하기
                        <AiFillCaretUp size="12px" />
                      </S.CountButton>
                      <S.CountButton
                        onClick={() => {
                          dispatch(minusCount(item.id));
                        }}
                        disabled={item.count < 2}
                      >
                        빼기
                        <AiFillCaretDown size="12px" />
                      </S.CountButton>
                    </S.CountButtonWrap>
                  </S.CountForm>
	                <button type="button" onClick={() => dispatch(deleteItem(item.id))}>
		                삭제
	                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </S.Table>
        <div>
          총 금액
          {cart
            .reduce((previousValue, currentValue) => previousValue + currentValue.price * currentValue.count, 0)
            .toLocaleString()}
          원
        </div>
        <div>
	        <Link to="/payment"><Button  bcColor="#346aff" color="#fff">결제하기</Button></Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
