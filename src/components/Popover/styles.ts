import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  height: 96px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 20px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.24),
    0px 8px 16px rgba(0, 0, 0, 0.24);
  border-radius: 2px;

  background: #383b51;
  /* box-shadow: {ShadowsLevel1}; */

  position: absolute;
  bottom: 110px;
  left: 680px;

  animation: fadeIn 0.9s both;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
