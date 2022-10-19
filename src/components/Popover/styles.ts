import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  height: 96px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 20px;

  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.24),
    0px 8px 16px rgba(0, 0, 0, 0.24);
  border-radius: 2px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  background: #383b51;

  position: absolute;
  bottom: 0;
  top: 70px;
  left: 4px;

  animation: fadeIn 0.9s both;

  ::before {
    content: " ";

    display: block;
    top: -20px;
    left: 20px;
    width: 0;
    height: 0;
    position: absolute;
    border-color: transparent transparent #a9a9a9;
    border-style: solid;
    border-width: 10px;
  }

  ::after {
    content: " ";

    position: absolute;
    top: -10px;
    left: 20px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #383b51;
    width: 0;
    height: 0;
  }

  /* Yellow triangle */

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Arrow = styled.div``;
