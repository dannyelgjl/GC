import { IHeader } from "./types";
import { Container } from "./styles";

const Header = ({ children, logo }: IHeader) => {
  return <Container logo={logo}>{children}</Container>;
};

export default Header;
