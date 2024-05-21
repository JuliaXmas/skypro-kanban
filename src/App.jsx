import "./App.css";
import { useState } from "react";
import { GlobalStyle } from "./global.styled.js";
import { Wrapper } from "./App.styled.js";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/Authorization/Login.jsx";
import UserSignup from "./pages/Authorization/Signup.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import CurrentCard from "./pages/CardPage.jsx";
import ExitPage from "./pages/ExitPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NewCard from "./pages/NewCardPage.jsx";

function App() {
  const [cards, setCards] = useState(null);
  const [userData, setUserData] = useState(null);
  return (
    <Wrapper>
      <GlobalStyle />

      <Routes>
        <Route element={<PrivateRoute isAuth={userData} />}>
          <Route
            path="/"
            element={
              <HomePage cards={cards} setCards={setCards} userData={userData} />
            }
          >
            <Route path="/card/:id" element={<CurrentCard />} />
            <Route path="/exit" element={<ExitPage setLogin={userData} />} />
            <Route
              path="/newcard"
              element={<NewCard cards={cards} setCards={setCards} />}
            />
          </Route>
        </Route>

        <Route
          path="/login"
          element={<UserLogin setUserData={setUserData} />}
        />
        <Route path="/register" element={<UserSignup />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
