import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Logo = styled.img`
  padding-top: 2rem;
  padding-left: 1rem;
  grid-area: header;
`;

export const Header: React.FC<{}> = () => {
  return (
    <header>
      <Logo src={logo} alt="Logo do app" />
    </header>
  );
};
