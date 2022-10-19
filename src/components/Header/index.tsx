import { IHeader } from "./types";
import { Container } from "./styles";

const Header = ({ children, logo, isColor }: IHeader) => {
  return (
    <Container isColor={isColor} logo={logo}>
      {children}
    </Container>
  );
};

export default Header;
