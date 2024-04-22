import { useState } from "react";

const DropDownUserSet = () => {
  const [isOPen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <nav className="header__nav">
      <a
        href="#user-set-target"
        className="header__user _hover02"
        onClick={toggleDropDown}
      >
        Ivan Ivanov
      </a>
      {isOPen && (
        <div className="header__pop-user-set pop-user-set" id="user-set-target">
          {/*  <!-- <a href="">x</a> --> */}
          <p className="pop-user-set__name">Ivan Ivanov</p>
          <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
          <div className="pop-user-set__theme">
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox" />
          </div>
          <button type="button" className="_hover03">
            <a href="#popExit">Выйти</a>
          </button>
        </div>
      )}
    </nav>
  );
};

export default DropDownUserSet;
