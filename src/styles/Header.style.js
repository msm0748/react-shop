import styled from "styled-components";

export const Header = styled.header`
  margin-bottom: 80px;
  position: relative;
  z-index: 10;
`;

export const Gnb = styled.div`
  margin-bottom: 50px;
  padding: 10px 0;
  background-color: #ff9dc5;

  .wrap {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      margin: 0 10px;

      &.sign-up {
        position: relative;

        &::before {
          display: block;
          position: absolute;
          top: 2px;
          bottom: 0;
          left: -10px;
          width: 1px;
          height: 16px;
          margin: auto;
          background-color: rgb(161, 161, 161);
        }
      }
    }
  }
`;

export const Logo = styled.div`
  overflow: hidden;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  ul {
    display: flex;
    align-self: center;

    li {
      margin: 0 8px;
    }
  }
`;

export const SearchBox = styled.div`
  width: 400px;
  border-bottom: 2px solid #000;
  position: relative;

  form {
    display: flex;

    button {
      font-size: 0;
      line-height: 0;
    }
  }
`;

export const SearchInput = styled.input`
  height: 40px;
  padding-left: 10px;
  border: none;
  flex: 1;
`;

export const SearchPanel = styled.div`
  position: absolute;
  background-color: #fff;
  width: 100%;
  top: calc(100% + 1px);
  border: 1px solid;

  div {
    padding: 5px 8px;

    &:hover {
      background-color: #eee;
    }

    a {
      display: block;
    }
  }
`;

export const HeaderCartCount = styled.div`
  position: absolute;
  text-align: center;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  top: -5px;
  right: 10px;
  background: #346aff;
  color: #fff;
  font-size: 12px;
`;

export const Category = styled.div`
  margin-top: 50px;
  padding: 20px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  ul {
    display: flex;

    li {
      width: 200px;
    }
  }
`;