import * as S from "./styles";
import { IAvatar } from "./types";

const Avatar = ({ id, nickname, avatar }: IAvatar) => {
  return (
    <S.Container>
      <S.UserAvatar src={avatar} />

      <S.UserInfo>
        <S.NickName>{nickname}</S.NickName>
        <S.ID>{id}</S.ID>
      </S.UserInfo>
    </S.Container>
  );
};

export default Avatar;
