import * as S from "./Sign.styled";
import { Link, useNavigate } from "react-router-dom";

const UserSignup = () => {
  let navigate = useNavigate();

  function goToLogin() {
    navigate("/login");
  }

  return (
    <S.SignWrapper>
      <S.SignContainer>
        <S.SignModal>
          <S.SignModalBlock>
            <S.SignModalTtlH2>
              <h2>Регистрация</h2>
            </S.SignModalTtlH2>
            <S.SignFormLogin id="formLogUp" action="#">
              <S.SignInput
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <S.SignInput
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.SignInput
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <S.SignBtnEnt id="SignUpEnter">
                <Link>Зарегистрироваться</Link>
              </S.SignBtnEnt>
              <S.SignFromGroup>
                <p>
                  Уже есть аккаунт?{" "}
                  <Link onClick={goToLogin}>
                    Войдите здесь
                  </Link>
                </p>
              </S.SignFromGroup>
            </S.SignFormLogin>
          </S.SignModalBlock>
        </S.SignModal>
      </S.SignContainer>
    </S.SignWrapper>
  );
};

export default UserSignup;
