import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Symbol.svg";
import { ReactComponent as LogoName } from "../../assets/campGladiator.svg";

import { Content, Title, Wrapper } from "./Header.styles";

const Header = () => (
  <Content>
    <Wrapper>
      <Link to="/" className="link">
        <Logo className="logo" />
        <LogoName />
      </Link>
      <Title></Title>
    </Wrapper>
  </Content>
);

export default Header;
