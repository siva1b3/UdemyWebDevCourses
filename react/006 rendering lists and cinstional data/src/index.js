import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import App01 from "./01LastModuleCode/App";
// import App02 from "./02RenderingListsusingmap/App";
import App03 from "./03AddingnewExpenses/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* Last module code */}
    {/* <App01 /> */}

    {/* rendering data using map method */}
    {/* <App02 /> */}

    {/* Adding new expenses to the exiting list of expenses */}
    <App03 />
  </StrictMode>
);
