import React from "react";

import { Routes, Route } from "react-router-dom";
import { Loadind } from "./components";

const Experience = React.lazy(() => import("./view/Experience"));
const Information = React.lazy(() => import("./view/Information"));
const Landing = React.lazy(() => import("./view/Landing"));

function App() {
  return (
    <React.Suspense fallback={<Loadind />}>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/information"} element={<Information />} />
        <Route path={"/experience"} element={<Experience />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
