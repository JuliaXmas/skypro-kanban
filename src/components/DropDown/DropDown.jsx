import { useState } from "react";
import { HeaderNav } from "../Header/header.styled";
import * as S from "./DropDown.styled";
import { Link } from "react-router-dom";

const DropDownUserSet = ({ goToLogin }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpenedPopUpExit, setIsOpenedPopUpExit] = useState(false);

  function togglePopUpExit() {
    setIsOpenedPopUpExit((isOpenedPopUpExit) => !isOpenedPopUpExit);
  }

  function togglePopUp() {
    setIsOpened((isOpened) => !isOpened);
  }

  return (
    <HeaderNav>
      <S.HeaderUser onClick={togglePopUp}>Ivan Ivanov</S.HeaderUser>
      {isOpenedPopUpExit && <S.PopExit />}
      {isOpened && (
        <S.HeaderPopUserSet>
          <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
          <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
          <S.PopUserSetTheme>
            <p>Темная тема</p>
            <S.PopUserSetThemeInput type="checkbox" name="checkbox" />
          </S.PopUserSetTheme>
          <S.ExitButtonHeader onClick={togglePopUpExit}>
            <Link onClick={goToLogin}>Выйти</Link>
          </S.ExitButtonHeader>
        </S.HeaderPopUserSet>
      )}
    </HeaderNav>
  );
};

export default DropDownUserSet;
