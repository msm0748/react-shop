import * as S from "../styles/Cart.style.js";

function Cart() {
  return (
    <>
      <div className="wrap">
        <S.Table>
          <thead>
            <th>상품정보</th>
            <th>상품금액</th>
            <th>수량</th>
          </thead>
          <tbody></tbody>
        </S.Table>
      </div>
    </>
  );
}

export default Cart;
