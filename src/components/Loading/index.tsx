import ReactLoading from "react-loading";
import { ILoading } from "./types";

const Loading = ({ type, width, height, color }: ILoading) => {
  return (
    <ReactLoading type={type} width={width} height={height} color={color} />
  );
};

export default Loading;
