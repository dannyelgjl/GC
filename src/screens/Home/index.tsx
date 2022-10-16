import { Card, Avatar, Championships } from '../../components';
import {
  Container, 
  Header, 
  LevelGamer, 
  Pass, 
  Content, 
} from './styles';

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

        <Content>
          <Championships />
          <Championships />
          <Championships />
        </Content>
      </Card>
    </Container>
  );
}

export default Home;