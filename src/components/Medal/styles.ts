import styled from "styled-components";

type Color = {
  isChangeColor: boolean;
};

export const Container = styled.div<Color>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60px;
  height: 80px;
  background: ${({ isChangeColor }) => `
    linear-gradient(
      180deg,
      ${
        isChangeColor
          ? "rgba(251, 75, 86, 0) 50%, rgba(251, 75, 86, 0.16) 98.7%"
          : "rgba(89, 104, 248, 0) 50%, rgba(89, 104, 248, 0.16) 98.7%)"
      }
      
    )#1c1d2c,
  `};
  border: 1px solid
    ${({ isChangeColor }) => (isChangeColor ? "#f23641" : "#49A3FD")};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
`;

export const Line = styled.div<Color>`
  width: 100%;
  height: 1px;
  border: 1px dashed
    ${({ isChangeColor }) => (isChangeColor ? "#f23641" : "#49A3FD")};
  margin-top: 8px;
`;

export const MedalIcon = styled.img`
  width: 56px;
  height: 56px;
`;
