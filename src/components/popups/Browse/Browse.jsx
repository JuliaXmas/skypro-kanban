import Calendar from "../../Calendar/Calendar";

const BrowsePopup = () => {
  return (
    <div classNamenameName="pop-browse" id="popBrowse">
      <div classNamenameName="pop-browse__container">
        <div classNamenameName="pop-browse__block">
          <div classNamenameName="pop-browse__content">
            <div classNamenameName="pop-browse__top-block">
              <h3 classNamenameName="pop-browse__ttl">Название задачи</h3>
              <div classNamenameName="categories__theme theme-top _orange _active-category">
                <p classNamenameName="_orange">Web Design</p>
              </div>
            </div>
            <div classNamenameName="pop-browse__status status">
              <p classNamenameName="status__p subttl">Статус</p>
              <div classNamenameName="status__themes">
                <div classNamenameName="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div classNamenameName="status__theme _gray">
                  <p classNamenameName="_gray">Нужно сделать</p>
                </div>
                <div classNamenameName="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div classNamenameName="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div classNamenameName="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <div classNamenameName="pop-browse__wrap">
              <form
                classNamenameName="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div classNamenameName="form-browse__block">
                  <label htmlFor="textArea01" classNamenameName="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    classNamenameName="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <div classNamenameName="pop-new-card__calendar calendar">
                <p classNamenameName="calendar__ttl subttl">Даты</p>
                <Calendar />
              </div>
            </div>
            <div classNamenameName="theme-down__categories theme-down">
              <p classNamenameName="categories__p subttl">Категория</p>
              <div classNamenameName="categories__theme _orange _active-category">
                <p classNamenameName="_orange">Web Design</p>
              </div>
            </div>
            <div classNamenameName="pop-browse__btn-browse">
              <div classNamenameName="btn-group">
                <button classNamenameName="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button classNamenameName="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button classNamenameName="btn-browse__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
            <div classNamenameName="pop-browse__btn-edit _hide">
              <div classNamenameName="btn-group">
                <button classNamenameName="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button classNamenameName="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  classNamenameName="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button classNamenameName="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePopup;
