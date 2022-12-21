import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cadastrar } from "./pages/Cadastrar"
import { Feed } from "./pages/Feed"

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
