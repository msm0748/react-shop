import * as S from "../styles/Cart.style.js";
import {useSelector, useDispatch} from "react-redux";
import {paymentItem} from "../store/cartSlice.js";

function Payment() {
	let cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	console.log(cart);
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(paymentItem(cart));
	}
	return (
			<div className="wrap">
				<S.Table>
					<colgroup>
						<col style={{width: "100px"}}/>
						<col/>
						<col/>
						<col/>
					</colgroup>
					<thead>
					<tr>
						<th colSpan="2">상품정보</th>
						<th>상품금액</th>
						<th>수량</th>
					</tr>
					</thead>
					<tbody>
					{cart.map((item, i) => (
							<tr key={i}>
								<td>
									<img src={item.imgSrc} alt={item.title}/>
								</td>
								<td>
									<div>{item.title}</div>
								</td>
								<td>{(item.price * item.count).toLocaleString()}원</td>
								<td>
									<S.CountForm>
										<S.Input value={item.count}/>
									</S.CountForm>
								</td>
							</tr>
					))}
					</tbody>
				</S.Table>
				<div>
					총 금액
					{cart.reduce((previousValue, currentValue) => previousValue + currentValue.price * currentValue.count, 0)
							.toLocaleString()}
					원
				</div>
				<form onSubmit={onSubmit}>
					<label htmlFor="inputName">이름 :</label>
					<input type="text" id="inputName"/>
					<label htmlFor="inputCardName">카드번호 :</label>
					<input type="text" id="inputCardName"/>
					<button type="submit">결제</button>
				</form>
			</div>
	)
}

export default Payment;


