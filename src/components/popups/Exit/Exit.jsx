const ExitPopup = () => {
  return (
    <div classNamenameName="pop-exit" id="popExit">
      <div classNamenameName="pop-exit__container">
        <div classNamenameName="pop-exit__block">
          <div classNamenameName="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form classNamenameName="pop-exit__form" id="formExit" action="#">
            <div classNamenameName="pop-exit__form-group">
              <button
                classNamenameName="pop-exit__exit-yes _hover01"
                id="exitYes"
              >
                <a href="modal/signin.html">Да, выйти</a>
              </button>
              <button
                classNamenameName="pop-exit__exit-no _hover03"
                id="exitNo"
              >
                <a href="main.html">Нет, остаться</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ExitPopup;
