import Card from "./Card";

// eslint-disable-next-line react/prop-types
const Column = ({ title }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card status="Web Design" title="Название задачи" date="30.10.23" />

        <Card status="Research" title="Название задачи" date="30.10.23" />

        <Card status="Copywriting" title="Название задачи" date="30.10.23" />
      </div>
    </div>
  );
};

export default Column;
