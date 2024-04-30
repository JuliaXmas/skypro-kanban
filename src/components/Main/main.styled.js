import styled from "styled-components";

export const MainBlock = styled.main`
  .main {
    width: 100%;
    background-color: #eaeef6;

    &__block {
      width: 100%;
      margin: 0 auto;
      padding: 25px 0 49px;
    }

    &__content {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    &__column {
      width: 20%;
      margin: 0 auto;
      display: block;
    }
  }
`;
