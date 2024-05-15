import ExitPopup from "../components/popups/Exit/Exit";

function ExitPage({ setLogin }) {
  function logOut() {
    setLogin(false);
  }

  return <ExitPopup logOut={logOut} />;
}

export default ExitPage;
