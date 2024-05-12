import * as S from "./Sign.styled";
import { useNavigate } from "react-router-dom";

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
              <S.SignupInput
                className="modal__input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <S.SignInput
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <S.SignBtnEnt id="btnEnter">
                <a href="../main.html" onClick={onLogin}>
                  Войти
                </a>
              </S.SignBtnEnt>
              <S.SignFromGroup>
                <p>Нужно зарегистрироваться?</p>
                <a href="signup.html" onClick={goToReg}>
                  Регистрируйтесь здесь
                </a>
              </S.SignFromGroup>
            </S.SignFormLogin>
          </S.SignModalBlock>
        </S.SignModal>
      </S.SignContainer>
    </S.SignWrapper>
  );
};

export default UserLogin;
