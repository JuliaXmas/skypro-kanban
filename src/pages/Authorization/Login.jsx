import { useState } from "react";
import * as S from "./Sign.styled";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api";

function UserLogin({ setUserData }) {
  let navigate = useNavigate();

  const loginForm = {
    login: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(loginForm);

  const handleLogin = async (event) => {
    event.preventDefault();
    await login(loginData)
      .then((data) => {
        console.log(data);
        setUserData(data.user);
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        
      })
     
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <S.SignWrapper>
      <S.SignContainer>
        <S.SignModal>
          <S.SignModalBlock>
            <S.SignModalTtlH2>
              <h2>Вход</h2>
            </S.SignModalTtlH2>
            <S.SignFormLogin id="formLogIn" action="#">
              <S.SignInput
                type="text"
                id="formlogin"
                placeholder="Эл. почта"
                value={loginData.login}
                onChange={handleInputChange}
                name="login"
              />
              <S.SignInput
                value={loginData.password}
                onChange={handleInputChange}
                name="password"
                type="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <S.SignBtnEnt id="btnEnter" onClick={handleLogin}>
                Войти
              </S.SignBtnEnt>
              <S.SignFromGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={"/register"}>Регистрируйтесь здесь</Link>
              </S.SignFromGroup>
            </S.SignFormLogin>
          </S.SignModalBlock>
        </S.SignModal>
      </S.SignContainer>
    </S.SignWrapper>
  );
}

export default UserLogin;
