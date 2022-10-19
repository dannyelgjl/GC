import React from "react";
import { IHeader } from "./types";
import { Container } from "./styles";

const Header = ({ children }: IHeader) => {
  return <Container>{children}</Container>;
};

export default Header;
