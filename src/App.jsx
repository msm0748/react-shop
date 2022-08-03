import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setItem} from "./store/rootSlice.js";
import Detail from "./pages/Detail.jsx";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Cart from "./pages/Cart.jsx";
import Category from "./pages/Category.jsx";
import Payment from "./pages/Payment.jsx";
import {Route, Routes} from "react-router-dom";
import data from "./data.js";

function App() {
	const dispatch = useDispatch();
	let clothes = useSelector((state) => state.root);
	useEffect(() => {
		dispatch(setItem(data));
	}, [])

	return (
			<>
				<Header clothes={clothes}/>
				<Routes>
					<Route path="/" element={<Home clothes={clothes}/>}/>
					<Route path="/detail/:id" element={<Detail clothes={clothes}/>}/>
					<Route path="/category/:name" element={<Category clothes={clothes}/>}/>
					<Route path="/cart" element={<Cart/>}/>
					<Route path="/Payment" element={<Payment/>}/>
				</Routes>
			</>
	);
}

export default App;
