import React from "react";
import { createRoot } from "react-dom/client";
import Faq from "./pages/Faq.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Faq />
  </React.StrictMode>
);
