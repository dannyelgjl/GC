import * as S from './styles';
import { IAvatar } from './types';

const Avatar = ({ id, nickname }: IAvatar) => {

    // GC.Muleklizzo
    // ID: 737335
  return (
    <S.Container>
        <S.UserAvatar />
        
        <S.UserInfo>
            <S.NickName>{nickname}</S.NickName>
            <S.ID>{id}</S.ID>
        </S.UserInfo>
    </S.Container>
  );
}

export default Avatar;