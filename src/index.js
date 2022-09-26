import {React, useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import { Info, Projects, NoPage, ProjectDetails } from "./pages";

import "./index.css";

import {strings} from "./string";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Info />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="projectdetails/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

);
