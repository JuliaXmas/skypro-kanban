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
        <div className="header__pop-user-set pop-user-set" id="user-set-target">
          {/*  <!-- <a href="">x</a> --> */}
          <p className="pop-user-set__name">Ivan Ivanov</p>
          <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
          <div className="pop-user-set__theme">
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox" />
          </div>
          <S.ExitButtonHeader>
            <S.ExitButtonHeaderA>Выйти</S.ExitButtonHeaderA>
          </S.ExitButtonHeader>
        </div>
      )}
    </HeaderNav>
  );
};

export default DropDownUserSet;
