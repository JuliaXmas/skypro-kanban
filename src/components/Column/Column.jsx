import Card from "../Card/Card.jsx";
import * as S from "./Column.styled.js";

// eslint-disable-next-line react/prop-types
const Column = ({ title, cardList }) => {
  return (
    <S.ColumnBlock>
      <div className="column__title">
        <S.ColumnTitle>{title}</S.ColumnTitle>
      </div>
      <div className="cards">
        {cardList.map((card) => (
          <Card
            key={card._id}
            id={card._id}
            topic={card.topic}
            title={card.title}
            date={new Date().toLocaleDateString()}
          />
        ))}
      </div>
    </S.ColumnBlock>
  );
};

export default Column;
