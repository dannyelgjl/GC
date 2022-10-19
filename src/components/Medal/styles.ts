import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60px;
  height: 80px;
  background: linear-gradient(
      180deg,
      rgba(251, 75, 86, 0) 50%,
      rgba(251, 75, 86, 0.16) 98.7%
    ),
    #1c1d2c;
  border: 1px solid #f23641;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px dashed #f23641;
  margin-top: 8px;
`;

export const MedalIcon = styled.img`
  width: 56px;
  height: 56px;
`;
