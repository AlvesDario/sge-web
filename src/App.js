import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import "./style.css";
import Login from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="home" element={<MainPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}
