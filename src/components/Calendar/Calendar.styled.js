import styled from "styled-components";

export const CalendarBlock = styled.div`
  width: 182px;
  margin-bottom: 20px;

  &__ttl {
    margin-bottom: 14px;
    padding: 0 7px;
  }

  &__p {
    color: #94a6be;
    font-size: 10px;
    line-height: 1;

    & span {
      color: #000000;
    }
  }

  &__block {
    display: block;
  }

  &__month {
    color: #94a6be;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
  }

  &__content {
    margin-bottom: 12px;
  }

  &__days-names {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
  }

  &__day-name {
    color: #94a6be;
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
  }

  &__cells {
    width: 182px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;
  }

  &__cell {
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: #94a6be;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;
  }

  &__nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding: 0 7px;
  }
  &__period {
    padding: 0 7px;
  }
`;
