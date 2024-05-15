import styled, { keyframes } from "styled-components";
import { topicStyles } from "../../data";

const CardAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }

  100% {
    height: auto;
    opacity: 1;
  }
`;

export const CardsBlock = styled.div`
  width: 100%;
  display: block;
  position: relative;

  &item {
    padding: 5px;
    animation-name: ${CardAnimation};
    animation-duration: 500ms;
    animation-timing-function: linear;
  }
`;

export const Cards = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  margin-bottom: 20px;
`;

export const CardBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  &group {
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &title {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #000000;
    margin-bottom: 10px;
  }
`;

export const CardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  & div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & svg {
    width: 13px;
  }

  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  ${(props) => topicStyles[props.$color]};
`;

export const CardTopic = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;
