import { useState } from "react";
import { signup } from "../../api";
import * as S from "./Sign.styled";
import { Link, useNavigate } from "react-router-dom";

const UserSignup = ({ setSignupUserData }) => {
  let navigate = useNavigate();

  const signupForm = {
    name: "",
    login: "",
    password: "",
  };

  const [signupData, setSignupData] = useState(signupForm);

  const handleSignup = async (event) => {
    event.preventDefault();
    await signup(signupData)
      .then((data) => {
        console.log(data);
        setSignupUserData(data.user);
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

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
                id="formname"
                placeholder="text"
                value={signupData.name}
                onChange={handleInputChange}
                name="name"
              />
              <S.SignInput
                type="text"
                id="formlogin"
                placeholder="Эл. почта"
                value={signupData.login}
                onChange={handleInputChange}
                name="login"
              />
              <S.SignInput
                value={signupData.password}
                onChange={handleInputChange}
                name="password"
                type="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <S.SignBtnEnt id="SignUpEnter" onClick={handleSignup}>
                <Link>Зарегистрироваться</Link>
              </S.SignBtnEnt>
              <S.SignFromGroup>
                <p>
                  Уже есть аккаунт? <Link to={"/login"}>Войдите здесь</Link>
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
