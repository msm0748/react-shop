import React, { useState } from "react";
import logoImg from "../images/logo_img.png";
import logo from "../images/logo.jpg";
import * as S from "./Header.style.js";
import { getRegExp } from "korean-regexp";
import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

const Header = ({ shoes }) => {
  const [text, setText] = useState("");
  const goodsList = shoes;

  console.log(goodsList);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <S.Header>
      <S.Gnb>
        <div className="wrap">
          <S.Logo>
            <a href="/">
              <img src={logoImg} alt="로고" />
            </a>
          </S.Logo>
          <ul>
            <li className="login">
              <a href="">로그인</a>
            </li>
            <li className="sign-up">
              <a href="">회원가입</a>
            </li>
          </ul>
        </div>
      </S.Gnb>
      <div>
        <div className="wrap">
          <S.SearchWrap>
            <img src={logo} alt="옷이 이쁘달" />
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
                          <a href={`/detail/${v.id}`}>{v.title}</a>
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
                <a href="">
                  <i>
                    <AiOutlineShoppingCart size="28px" />
                  </i>
                  장바구니
                </a>
              </li>
            </ul>
          </S.SearchWrap>
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
