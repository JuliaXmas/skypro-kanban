import "./App.css";
import Header from "./components/Header";
import Main from "./components/main";
import BrowsePopup from "./components/popups/Browse";
import ExitPopup from "./components/popups/Exit";
import NewCardPopup from "./components/popups/NewCard";

function App() {
  return (
    <div className="wrapper">
      <ExitPopup />

      <NewCardPopup />

      <BrowsePopup />

      <Header />

      <Main />
    </div>
  );
}

export default App;
