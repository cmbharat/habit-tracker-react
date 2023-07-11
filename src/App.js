import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import MyHabits from "./components/MyHabits";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Welcome} exact={true} />
        <Route path="/habits" Component={MyHabits} exact={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
