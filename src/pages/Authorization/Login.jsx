import * as S from "./Sign.styled";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = ({ login }) => {
  let navigate = useNavigate();

  function goToReg() {
    navigate("/register");
  }

  function onLogin() {
    login(true);
    navigate("/");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      onLogin();
    }
  }

  return (
    <S.SignWrapper>
      <S.SignContainer>
        <S.SignModal>
          <S.SignModalBlock>
            <S.SignModalTtlH2>
              <h2>Вход</h2>
            </S.SignModalTtlH2>
            <S.SignFormLogin
              id="formLogIn"
              action="#"
              onKeyDown={handleKeyPress}
            >
              <S.SignInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <S.SignInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <S.SignBtnEnt id="btnEnter">
                <Link onClick={onLogin}>Войти</Link>
              </S.SignBtnEnt>
              <S.SignFromGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link onClick={goToReg}>Регистрируйтесь здесь</Link>
              </S.SignFromGroup>
            </S.SignFormLogin>
          </S.SignModalBlock>
        </S.SignModal>
      </S.SignContainer>
    </S.SignWrapper>
  );
};

export default UserLogin;
