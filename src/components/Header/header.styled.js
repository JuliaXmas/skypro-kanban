import styled from "styled-components";

export const HeaderBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;

  &__block {
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
  }

  &__logo {
    & img {
      width: 85px;
    }
  }

  &__nav {
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__btn-main-new {
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565eef;
    color: #ffffff;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;
    & a {
      color: #ffffff;
    }
  }

  &__user {
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: #565eef;

    &::after {
      content: "";
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 1px;
      border-left: 1.9px solid #565eef;
      border-bottom: 1.9px solid #565eef;
      transform: rotate(-45deg);
      margin: -6px 0 0 5px;
      padding: 0;
    }
  }

  &__pop-user-set {
    display: block;
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: #fff;
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;
  }
`;
