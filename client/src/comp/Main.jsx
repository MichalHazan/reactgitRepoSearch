import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Page404 from "./Page404";
export default function Main({repositories, SearchFunction, CriteriaFunction}) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home repositories={repositories} SearchFunction={SearchFunction} CriteriaFunction={CriteriaFunction} />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
}
