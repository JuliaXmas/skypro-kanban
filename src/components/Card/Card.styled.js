import styled, { keyframes } from "styled-components";

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
  .cards {
    width: 100%;
    display: block;
    position: relative;

    &__item {
      padding: 5px;
      animation-name: ${CardAnimation};
      animation-duration: 500ms;
      animation-timing-function: linear;
    }

    &__card {
      width: 220px;
      height: 130px;
      background-color: #ffffff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: stretch;
      padding: 15px 13px 19px;
    }
  }
`;

export const CardBlock = styled.div`
  .card {
    &__group {
      width: 100%;
      height: 20px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__theme {
      width: auto;
      height: 20px;
      padding: 5px 14px;
      border-radius: 18px;

      & p {
        font-size: 10px;
        font-weight: 600;
        line-height: 10px;
      }
    }

    &__btn {
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
    }

    &__title {
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      color: #000000;
      margin-bottom: 10px;
    }

    &__content {
      height: 64px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }

    &__date {
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
    }
  }
`;
