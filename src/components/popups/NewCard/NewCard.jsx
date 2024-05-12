import Calendar from "../../Calendar/Calendar";

const NewCardPopup = ({ addCard }) => {
  return (
    <div classNamenameName="pop-new-card" id="popNewCard">
      <div classNamenameName="pop-new-card__container">
        <div classNamenameName="pop-new-card__block">
          <div classNamenameName="pop-new-card__content">
            <h3 classNamenameName="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" classNamenameName="pop-new-card__close">
              &#10006;
            </a>
            <div classNamenameName="pop-new-card__wrap">
              <form
                classNamenameName="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div classNamenameName="form-new__block">
                  <label htmlFor="formTitle" classNamenameName="subttl">
                    Название задачи
                  </label>
                  <input
                    classNamenameName="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div classNamenameName="form-new__block">
                  <label htmlFor="textArea" classNamenameName="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    classNamenameName="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <div classNamenameName="pop-new-card__calendar calendar">
                <p classNamenameName="calendar__ttl subttl">Даты</p>
                <Calendar />
              </div>
            </div>
            <div classNamenameName="pop-new-card__categories categories">
              <p classNamenameName="categories__p subttl">Категория</p>
              <div classNamenameName="categories__themes">
                <div classNamenameName="categories__theme _orange _active-category">
                  <p classNamenameName="_orange">Web Design</p>
                </div>
                <div classNamenameName="categories__theme _green">
                  <p classNamenameName="_green">Research</p>
                </div>
                <div classNamenameName="categories__theme _purple">
                  <p classNamenameName="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button
              classNamenameName="form-new__create _hover01"
              id="btnCreate"
              onClick={addCard}
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCardPopup;
