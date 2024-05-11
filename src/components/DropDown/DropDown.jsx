import { useState } from "react";
import { HeaderNav } from "../Header/header.styled";
import * as S from "./DropDown.styled";

const DropDownUserSet = () => {
  const [isOPen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <HeaderNav>
      <S.HeaderUser onClick={toggleDropDown}>Ivan Ivanov</S.HeaderUser>
      {isOPen && (
        <S.HeaderPopUserSet>
          {/*  <!-- <a href="">x</a> --> */}
          <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
          <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
          <S.PopUserSetTheme>
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox" />
          </S.PopUserSetTheme>
          <S.ExitButtonHeader>
            <S.ExitButtonHeaderA>Выйти</S.ExitButtonHeaderA>
          </S.ExitButtonHeader>
        </S.HeaderPopUserSet>
      )}
    </HeaderNav>
  );
};

export default DropDownUserSet;
