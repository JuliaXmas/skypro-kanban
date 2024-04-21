import "./App.css";
import Header from "./components/Header";
import Main from "./components/main";
import BrowsePopup from "./components/popups/Browse";
import ExitPopup from "./components/popups/Exit";
import NewCardPopup from "./components/popups/NewCard";
import { useState, useEffect } from "react";
import { cardList, statusList } from "./data";

function App() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState(cardList);
  const addCard = () => {
    console.log("Work");
    const newCard = {
      id: cards.length + 1,
      topic: "Web Design",
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
      <ExitPopup />

      <NewCardPopup addCard={addCard} />

      <BrowsePopup />

      <Header />

      {loading ? <p>loading</p> : <Main cards={cards} />}
    </div>
  );
}

export default App;
