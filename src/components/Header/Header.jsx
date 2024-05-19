import DropDownUserSet from "../DropDown/DropDown.jsx";
import * as S from "./header.styled.js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.Header>
      <div className="container">
        <S.HedaerBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="./images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="./images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <S.HeaderBtnMainNew>
              <Link to={"/newcard"}>Создать новую задачу</Link>
            </S.HeaderBtnMainNew>

            <DropDownUserSet />
          </S.HeaderNav>
        </S.HedaerBlock>
      </div>
    </S.Header>
  );
};
export default Header;
