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
// import { Routes, Route } from 'react-router-dom';

function App() {
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

      {/* <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
     */}
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
