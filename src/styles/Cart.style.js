import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-collapse: collapse;

  th,
  td {
    border-bottom: 1px solid;
    padding: 10px;
  }

  td {
    text-align: center;

    img {
      width: 80px;
    }
  }
`;

export const CountForm = styled.div`
  border: 1px solid #ccc;
  display: flex;
  width: fit-content;
  margin: auto;
`;

export const Input = styled.input`
  width: 60px;
  height: 40px;
  text-align: center;
`;

export const CountButtonWrap = styled.div`
  width: 20px;
`;

export const CountButton = styled.button`
  font-size: 0;
  width: 100%;
`;
