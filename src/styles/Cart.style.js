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
  }
`;
