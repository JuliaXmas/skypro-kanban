import { useNavigate } from "react-router-dom";
import NewCardPopup from "../components/popups/NewCard/NewCard";
import { statusList } from "../data";

function NewCard({ cards, setCards }) {
  let navigate = useNavigate();

  function closeAfterCreate() {
    navigate("/");
  }

  function addCard() {
    const newCard = {
      _id: cards.length + 1,
      category: cards[cards.length - 1].category || "Без кактегории",
      title: "Самая новая задача",
      date: new Date().toLocaleDateString(),
      status: statusList[0],
    };

    setCards([...cards, newCard]);

    closeAfterCreate();
  }

  return <NewCardPopup addCard={addCard} cards={cards} setCards={setCards} />;
}

export default NewCard;
