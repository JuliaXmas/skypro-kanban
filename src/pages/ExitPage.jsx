import ExitPopup from "../components/popups/Exit/Exit";

function ExitPage({ goToLogin }) {
  return <ExitPopup logOut={goToLogin} />;
}

export default ExitPage;
