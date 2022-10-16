import { Card, Avatar } from '../../components';
import {Container, Header, LevelGamer, Pass} from './styles';

const Home = () => {
  return (
    <Container>
      <Card>
        <Header>
          <Avatar nickname='GC.Muleklizzo' id='ID: 737335'/>

          <LevelGamer>
            <h1>Daniel</h1>
          </LevelGamer>

          <Pass />
        </Header>
        <h1>Daniel</h1>
      </Card>
    </Container>
  );
}

export default Home;