import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import BrowsePopup from "./components/popups/Browse/Browse.jsx";
import ExitPopup from "./components/popups/Exit/Exit.jsx";
import NewCardPopup from "./components/popups/NewCard/NewCard.jsx";
import { useState, useEffect } from "react";
import { cardList, statusList } from "./data";
import { GlobalStyle } from "./global.styled.js";
import { Wrapper } from "./App.styled.js";
import * as S from "./preloader.styled.js";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/Authorization/Login.jsx";
import UserSignup from "./pages/Authorization/Signup.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import CurrentCard from "./pages/CardPage.jsx";
import ExitPage from "./pages/ExitPage.jsx";
import NewCard from "./pages/NewCard.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
// import { Routes, Route } from 'react-router-dom';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState(cardList);
  const addCard = (event) => {
    event.preventDefault();
    console.log("Work");
    const newCard = {
      id: cards.length + 1,
      topic: "Без статуса",
      title: "ToDo",
      date: new Date().toLocaleDateString(),
      status: statusList[0],
    };
    setCards([...cards, newCard]);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Wrapper>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route
            path="/"
            element={<HomePage cards={cards} setCards={setCards} />}
          >
            <Route path="/card/:id" element={<CurrentCard />} />
            <Route path="/exit" element={<ExitPage setLogin={setIsAuth} />} />
            <Route
              path="/newcard"
              element={<NewCard cards={cards} setCards={setCards} />}
            />
          </Route>
        </Route>

        <Route path="/login" element={<UserLogin login={setIsAuth} />} />
        <Route path="/register" element={<UserSignup />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />

      <ExitPopup />

      <NewCardPopup />

      <BrowsePopup />

      <Header addCard={addCard} />

      {loading ? (
        <S.Preloader>
          <S.PreloaderLoader>
            <S.Spinner></S.Spinner>
          </S.PreloaderLoader>
        </S.Preloader>
      ) : (
        <Main cards={cards} />
      )}
    </Wrapper>
  );
}

export default App;
