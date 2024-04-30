import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import BrowsePopup from "./components/popups/Browse/Browse.jsx";
import ExitPopup from "./components/popups/Exit/Exit.jsx";
import NewCardPopup from "./components/popups/NewCard/NewCard.jsx";
import { useState, useEffect } from "react";
import { cardList, statusList } from "./data";
import { GlobalStyle } from "./global.styled.js";

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
    <div className="wrapper">
      <GlobalStyle />

      <ExitPopup />

      <NewCardPopup />

      <BrowsePopup />

      <Header addCard={addCard} />

      {loading ? <p>loading</p> : <Main cards={cards} />}
    </div>
  );
}

export default App;
