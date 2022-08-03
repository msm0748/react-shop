import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {AiFillCaretUp, AiFillCaretDown} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../store/cartSlice.js";
import ReactImageMagnify from "react-image-magnify";

import * as S from "../styles/Detail.style.js";

function Detail({clothes}) {
	const [count, setCount] = useState(1);
	const [disabled, setDisabled] = useState(true);
	const {id} = useParams();
	const currentClothes = clothes.find((a) => a.id == id);

	const dispatch = useDispatch();
	let cart = useSelector((state) => state.cart);
	useEffect(() => {
	}, [cart])

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

	return (
			<div className="wrap">
				{/*<S.Alert>안녕</S.Alert>*/}
				<S.DetailWrap>
					<S.DetailHead>
						<S.ImgWrap>
							<ReactImageMagnify
									style={{
										cursor: "default",
									}}
									{...{
										smallImage: {
											alt: currentClothes.title,
											isFluidWidth: true,
											src: currentClothes.imgSrc,
										},
										largeImage: {
											src: currentClothes.imgSrc,
											width: 1200,
											height: 1200,
										},
									}}
							/>
						</S.ImgWrap>
						<S.GoodsTit>
							<h4 className="pt-5">{currentClothes.title}</h4>
							<p>{(currentClothes.price * count).toLocaleString()}원</p>
							<S.ButtonWrap>
								<S.CountForm>
									<S.CountInput value={count} onChange={onChange}/>
									<S.CountButtonWrap>
										<S.CountButton onClick={onCountUp}>
											더하기
											<AiFillCaretUp size="12px"/>
										</S.CountButton>
										<S.CountButton onClick={onCountDown} disabled={disabled}>
											빼기
											<AiFillCaretDown size="12px"/>
										</S.CountButton>
									</S.CountButtonWrap>
								</S.CountForm>

								<S.Button
										onClick={() => {
											dispatch(addItem({...currentClothes, count: count, checked: true,}));
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
						<p>{currentClothes.content}</p>
					</S.DetailBody>
				</S.DetailWrap>
			</div>
	);
}

export default Detail;
