import styled from "styled-components";

export const MainBlock = styled.main`
  width: 100%;
  background-color: #eaeef6;

  &__block {
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;
  }

  .main__content {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }

  &__column {
    width: 20%;
    margin: 0 auto;
    display: block;
  }
`;
