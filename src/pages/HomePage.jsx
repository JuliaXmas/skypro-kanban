import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Main from "../components/Main/Main.jsx";
import Header from "../components/Header/Header.jsx";
import * as S from "../preloader.styled.js";

function HomePage({ cards }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <div className="wrapper">
      <Header />

      {isLoading ? (
        <S.Preloader>
          <S.PreloaderLoader>
            <S.Spinner></S.Spinner>
          </S.PreloaderLoader>
        </S.Preloader>
      ) : (
        <Main cards={cards} />
      )}

      <Outlet />
    </div>
  );
}

export default HomePage;
