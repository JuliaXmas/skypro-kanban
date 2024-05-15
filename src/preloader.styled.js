import styled, { keyframes } from "styled-components";

const SpinnerAnimation = keyframes`
 to {
        transform: rotate(1turn);
    }
`;

export const Preloader = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #94a6be;
  z-index: 2;
`;
export const PreloaderLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Spinner = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: conic-gradient(#000000 10%, #474bff);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  animation-name: ${SpinnerAnimation};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
