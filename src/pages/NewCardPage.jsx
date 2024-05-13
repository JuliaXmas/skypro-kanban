import { useNavigate } from "react-router-dom";
import { statusList } from "../../data";
import NewCardPopup from "../components/popups/NewCard/NewCard";

function NewCard({ cards, setCards }) {
  let navigate = useNavigate();

  function closeAfterCreate() {
    navigate("/");
  }

  function addCard() {
    const newCard = {
      id: cards.length + 1,
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
