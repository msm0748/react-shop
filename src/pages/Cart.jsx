import * as S from "../styles/Cart.style.js";
import { useSelector, useDispatch } from "react-redux";
import { addCount } from "../store/cartSlice.js";

function Cart() {
  let cart = useSelector((state) => state.cart);

  console.log(cart);
  let dispatch = useDispatch();
  return (
    <>
      <div className="wrap">
        <S.Table>
          <thead>
            <tr>
              <th>상품정보</th>
              <th>상품금액</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  {item.count}
                  <button
                    onClick={() => {
                      dispatch(addCount(item.id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </div>
    </>
  );
}

export default Cart;
