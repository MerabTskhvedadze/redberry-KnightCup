import React from "react";

import { Routes, Route } from "react-router-dom";
import { Landing, Information } from "./view";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />} />
      <Route path={"/information"} element={<Information />} />
    </Routes>
  );
}

export default App;
