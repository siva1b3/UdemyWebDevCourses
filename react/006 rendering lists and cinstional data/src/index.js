import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import App01 from "./01LastModuleCode/App";
// import App02 from "./02RenderingListsusingmap/App";
// import App03 from "./03AddingNewExpenseIntoExistingList/App";
// import App04 from "./04AddingUniqueKeys/App";
// import App05 from "./05MakingFilterWork/App";
// import App06 from "./06ConditionalRenderingMyOwnCode/App";
import App07 from "./07ConditionalRenderingAsPerVideo/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* Last module code */}
    {/* <App01 /> */}

    {/* rendering data using map method */}
    {/* <App02 /> */}

    {/* Adding new expenses to the exiting list of expenses */}
    {/* unpdating ui based on new expenses  */}
    {/* <App03 /> */}

    {/* Adding unique keys to components that will render dynamically*/}
    {/* <App04 /> */}

    {/* Making year wise filter work */}
    {/* <App05 /> */}

    {/* condetional rendering */}
    {/* on my own */}
    {/* <App06 /> */}

    {/* condetional rendering */}
    {/* as per video */}
    <App07 />
  </StrictMode>
);