import styled from "styled-components";

export const Wrap = styled.div`
	width:1280px;
  	margin:0 auto;
`

export const StyledButton = styled.button`
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
`