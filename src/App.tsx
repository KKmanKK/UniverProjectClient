import React from "react";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./Apps.css";
import "./app.css";
import { Lesson } from "./pages/Lesson";
import { Lessons } from "./pages/Lessons";
import { SingUp } from "./pages/SingUp";
import { Login } from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`lessons`} element={<Lessons />} />
        <Route path={`lessons/:id`} element={<Lesson />} />
        <Route path={`/singUp`} element={<SingUp />} />
        <Route path={`/login`} element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
