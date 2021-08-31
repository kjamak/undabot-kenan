import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
function Logo() {
  return (
    <Wrapper>
      <Img src={logo} />
    </Wrapper>
  );
}

export default Logo;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 150px;
`;
