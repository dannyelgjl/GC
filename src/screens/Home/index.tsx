import {Card} from '../../components';
import {Container, Header, Avatar} from './styles';

const Home = () => {
  return (
    <Container>
      <Card>
        <Header>
          <Avatar />
        </Header>
        <h1>Daniel</h1>
      </Card>
    </Container>
  );
}

export default Home;