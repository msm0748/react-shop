import styled from "styled-components";


export const DetailWrap = styled.div`
  width: 1020px;
  margin: auto;
`;

export const DetailHead = styled.div`
  display: flex;
`;

export const ImgWrap = styled.div`
  flex: 1;

  img {
    max-width: none;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const CountForm = styled.div`
  border: 1px solid #ccc;
  display: flex;
`;


export const Button = styled.button`
  display: block;
  line-height: 40px;
  width: 191px;
  height: 42px;
  color: ${(props) => (props.color ? props.color : "#346aff")};
  background: ${(props) => (props.bcColor ? props.bcColor : "transparent")};
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #346aff;
  margin: 0 5px;
`;

export const GoodsTit = styled.div`
  padding: 30px;
  flex: 1;
`;

export const DetailBody = styled.div`
  margin-top: 40px;
`;

export const CountButtonWrap = styled.div`
  width: 20px;
`;

export const CountButton = styled.button`
  font-size: 0;
  width: 100%;
`;

export const CountInput = styled.input`
  width: 60px;
  height: 40px;
  text-align: center;
`;


export const Alert = styled.div`
  position: fixed;
  top: 0;
  text-align:center;
  color:white;
  left: 0;
  right: 0;
  margin:0 auto;
  padding:10px;
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
  width: 400px;
  z-index: 999;
  background-color:blue;
  animation-fill-mode: forwards;
  animation-duration: 1.5s;
  animation-name: slidein;
  @keyframes slidein {
    0%{transform:translateY(-100%)}
    50%{transform:translateY(0)}
    70%{transform:translateY(0)}
    100%{transform:translateY(-100%)}
  }
`;
