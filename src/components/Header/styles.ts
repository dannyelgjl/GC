import styled from "styled-components";

type Logo = {
  logo: string;
};

export const Container = styled.div<Logo>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 128px;
  border-radius: 2px;
  background: ${({ logo }) => `
    linear-gradient(
      180deg,
      rgba(73, 163, 253, 0.16) 0%,
      rgba(73, 163, 253, 0) 100%
    ),
    linear-gradient(
    90deg,
    #212335 17.54%,
    rgba(33, 35, 53, 0.64) 51.46%,
    #212335 82.67%
    ),
    url(${logo}), #212335;
`};

  background-size: cover;
  background-repeat: no-repeat;
  padding: 18px;
`;
