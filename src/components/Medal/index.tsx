import { IMedal } from "./types";

import { Container, Line, MedalIcon } from "./styles";

const Medal = ({ medal, isChangeColor }: IMedal) => {
  return (
    <Container isChangeColor={isChangeColor}>
      <Line isChangeColor={isChangeColor} />
      <MedalIcon src={medal} />
    </Container>
  );
};

export default Medal;
