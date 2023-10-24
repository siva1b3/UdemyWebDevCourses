import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

// import App03 from "./03ReactBasics/App";
// import App04 from "./04ReactBestPractices/App";
// import App05 from "./05ReactStateAndEvents/App";
import App06 from "./06RenderingListsAndConitionaldata/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <App03 /> */}
    {/* <App04 /> */}
    {/* <App05 /> */}
    <App06 />
  </StrictMode>
);
