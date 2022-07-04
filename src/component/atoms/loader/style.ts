import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const FonLoader = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  z-index: 100;
  transition: 0.6s;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoaderStyle = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid rgba(255, 248, 51, 0.6);
  border-radius: 50%;
  border-right-color: #fff833;
  animation: ${rotate} 1.3s linear infinite;
  position: absolute;
`;
