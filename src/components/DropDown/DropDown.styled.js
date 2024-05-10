import styled from "styled-components";
 
export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  &:hover {
    color: #33399b;
  }
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
`;


export const ExitButtonHeader = styled.button`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const ExitButtonHeaderA = styled.a`
  &:hover {
    color: #ffffff;
  }
`;