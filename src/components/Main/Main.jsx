import Column from "../Column/Column.jsx";
import { statusList } from "../../data";
import * as S from "./main.styled.js";

const Main = ({ cards }) => {
  return (
    <S.Main>
      <div className="container">
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </div>
    </S.Main>
  );
};
export default Main;
