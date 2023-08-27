import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import "./index.css";
// import App01 from "./01Startercode/App";
import App02 from "./02IineStylesConditional/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* starter code  */}
    {/* <App01 /> */}

    {/* Conditional Inline styles */}
    <App02 />
  </StrictMode>
);
