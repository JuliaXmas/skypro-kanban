import Card from "../Card/Card.jsx";
import { ColumnBlock } from "./Column.styled.js";

// eslint-disable-next-line react/prop-types
const Column = ({ title, cardList }) => {
  return (
    <ColumnBlock>
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => (
          <Card
            key={card.id}
            topic={card.topic}
            title={card.title}
            date={card.date}
          />
        ))}
      </div>
    </ColumnBlock>
  );
};

export default Column;
