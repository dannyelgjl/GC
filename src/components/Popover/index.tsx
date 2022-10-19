import { ICustomPopover } from "./types";
import * as S from "./styles";

const Popover = ({ show, children }: ICustomPopover) => {
  return <>{show && <S.Container>{children}</S.Container>}</>;
};

export default Popover;
