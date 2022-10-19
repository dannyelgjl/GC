import { IMedal } from "./types";

import { Container, Line, MedalIcon } from "./styles";

const Medal = ({ medal }: IMedal) => {
  return (
    <Container>
      <Line />
      <MedalIcon src={medal} />
    </Container>
  );
};

export default Medal;
