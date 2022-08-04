import { useEffect, useState } from "react";
import * as S from "../styles/Cart.style.js";
import { useSelector, useDispatch } from "react-redux";
import { addCount, minusCount, deleteItem, paymentChecked } from "../store/cartSlice.js";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cart() {
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  useEffect(() => {}, [cart]);
  console.log(cart);

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
              <th>선택</th>
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
                      //   console.log(item);
                      //   console.log(e.target.checked);
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
                    <button type="button" onClick={() => dispatch(deleteItem(item.id))}>
                      삭제
                    </button>
                  </S.CountForm>
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
          <Link to="/payment">결제하기</Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
