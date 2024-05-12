import Card from "../Card/Card.jsx";
import * as S from "./Column.styled.js";

// eslint-disable-next-line react/prop-types
const Column = ({ title, cardList }) => {
  return (
    <S.ColumnBlock>
      <div classNamenameName="column__title">
        <S.ColumnTitle>{title}</S.ColumnTitle>
      </div>
      <div classNamenameName="cards">
        {cardList.map((card) => (
          <Card
            key={card.id}
            topic={card.topic}
            title={card.title}
            date={card.date}
          />
        ))}
      </div>
    </S.ColumnBlock>
  );
};

export default Column;
