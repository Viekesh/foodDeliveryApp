import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FDRoutes from "./Components/FDRoutes";

export default () => (
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<FDRoutes />}></Route>
      </Routes>
    </Router>
  </>
);
