import { Container } from './styles';
import { ICard } from './types'


const Card = ({children}: ICard) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Card;