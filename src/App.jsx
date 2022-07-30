import { useState } from "react";
import data from "./data.js";
import Detail from "./pages/Detail.jsx";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Cart from "./pages/Cart.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  const [shoes, setShoes] = useState(data);
  const onSortHandle = () => {
    setShoes((current) =>
      [...current].sort(function (a, b) {
        return a.price - b.price;
      })
    );
  };

  return (
    <>
      <Header shoes={shoes} />
      <button className="btn btn-danger" onClick={onSortHandle}>
        가격순으로
      </button>
      <Routes>
        <Route path="/" element={<Home shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
