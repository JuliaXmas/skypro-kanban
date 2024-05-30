import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Main from "../components/Main/Main.jsx";
import Header from "../components/Header/Header.jsx";
import * as S from "../preloader.styled.js";
import { getTasks } from "../api.js";
import { Wrapper } from "../App.styled.js";

function HomePage({ cards, setCards, userData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getTasks({ token: userData.token })
      .then((data) => {
        console.log(data);
        setCards(data.tasks);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userData.token]);

  return (
    <Wrapper>
      <Header />

      {isLoading ? (
        <S.Preloader>
          <S.PreloaderLoader>
            <S.Spinner></S.Spinner>
          </S.PreloaderLoader>
        </S.Preloader>
      ) : (
        <Main isLoading={isLoading} cards={cards} error={error} />
      )}

      <Outlet />
    </Wrapper>
  );
}

export default HomePage;
