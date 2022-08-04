import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
  }

  :before,
  :after {
    display: none;
    content: '';
  }

  a {
    text-decoration: none;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: #444;
  }

  img {
    max-width: 100%;
  }

  input {
    outline: none;
    border:none;
  }

  i{
    display:block;
    text-align:center;
    position:relative;
  }

  button{
    background-color:#fff;
    border:none;
    cursor:pointer;
  }

  .wrap {
    width: 1280px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
