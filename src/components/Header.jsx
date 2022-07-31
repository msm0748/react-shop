import React, { useState } from "react";
import { useSelector } from "react-redux";
import logoImg from "../assets/images/logo_img.png";
import logo from "../assets/images/logo.jpg";
import * as S from "../styles/Header.style.js";
import { getRegExp } from "korean-regexp";
import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({ clothes }) => {
  const [text, setText] = useState("");
  const goodsList = clothes;
  let cart = useSelector((state) => state.cart);
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <S.Header>
      <S.Gnb>
        <div className="wrap">
          <S.Logo>
            <Link to="/">
              <img src={logoImg} alt="로고" />
            </Link>
          </S.Logo>
          <ul>
            <li className="login">
              <Link to="">로그인</Link>
            </li>
            <li className="sign-up">
              <Link to="">회원가입</Link>
            </li>
          </ul>
        </div>
      </S.Gnb>
      <div>
        <div className="wrap">
          <S.SearchWrap>
            <Link to="/">
              <img src={logo} alt="옷이 이쁘달" />
            </Link>
            <S.SearchBox>
              <form action="">
                <S.SearchInput onChange={onChange} value={text} />
                <button type="submit" className="SearchBtn">
                  <i>
                    <AiOutlineSearch size="32px" />
                  </i>
                  검색
                </button>
                {text ? (
                  <S.SearchPanel>
                    {goodsList
                      .filter((v) => v.title.search(getRegExp(text)) !== -1)
                      .map((v) => (
                        <div key={v.id}>
                          <Link to={`/detail/${v.id}`}>{v.title}</Link>
                        </div>
                      ))}
                  </S.SearchPanel>
                ) : null}
              </form>
            </S.SearchBox>
            <ul>
              <li className="MyPage">
                <a href="">
                  <i>
                    <AiOutlineUser size="28px" />
                  </i>
                  마이페이지
                </a>
              </li>
              <li className="Cart">
                <Link to="/cart">
                  <i>
                    {cart.length > 0 && <S.HeaderCartCount>{cart.length}</S.HeaderCartCount>}

                    <AiOutlineShoppingCart size="28px" />
                  </i>
                  장바구니
                </Link>
              </li>
            </ul>
          </S.SearchWrap>
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
