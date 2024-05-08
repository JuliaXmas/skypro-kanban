import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: #eaeef6;

  &__column {
    width: 20%;
    margin: 0 auto;
    display: block;
  }
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
