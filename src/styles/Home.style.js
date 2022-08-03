import styled from "styled-components";

export const Button = styled.button`
  display: block;
  margin-left: auto;
`;

export const GoodsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const GoodsItem = styled.li`
  width: 20%;
  padding: 10px;
  margin: 20px 0;

  p,
  h4 {
    margin-top: 5px;
  }

  div {
    overflow: hidden;
  }

  img {
    transition: all 0.2s;
    width: 100%;
    display: block;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
