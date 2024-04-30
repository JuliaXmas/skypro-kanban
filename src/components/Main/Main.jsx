import Column from "../Column/Column.jsx";
import { statusList } from "../../data";
import { MainBlock } from "./main.styled.js";

const Main = ({ cards }) => {
  return (
    <MainBlock>
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </MainBlock>
  );
};
export default Main;
