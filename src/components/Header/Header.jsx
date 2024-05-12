import DropDownUserSet from "../DropDown/DropDown.jsx";
import * as S from "./header.styled.js";

const Header = ({ addCard }) => {
  return (
    <S.Header>
      <div classNamenameName="container">
        <S.HedaerBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="./images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <div classNamenameName="header__logo _dark">
            <a href="" target="_self">
              <img src="./images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <S.HeaderBtnMainNew onClick={addCard}>
              <a href="#popNewCard">Создать новую задачу</a>
            </S.HeaderBtnMainNew>

            <DropDownUserSet />
          </S.HeaderNav>
        </S.HedaerBlock>
      </div>
    </S.Header>
  );
};
export default Header;
