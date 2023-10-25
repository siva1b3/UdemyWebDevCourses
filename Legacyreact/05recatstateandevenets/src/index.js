import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./bootstrap.css";
import "./styles.css";

// import App00 from "./00ListeningToClicks/App";
// import App001 from "./001-HowClicksAloneNotChangeAnything/App";
// import App01 from "./01WorkingWithState/App";
// import App02 from "./02CreatingFormElement/App";
// import App03 from "./03creatingFormElementAsPerVideo/App";
// import App04 from "./04ReadingTheUserInput/App";
// import App05 from "./05WorkingWithMultipleStatesBasicMethod/App";
// import App06 from "./06BetterMethodToHandleMultipleStates/App";
// import App07 from "./07WorkingWithPrevState/App";
// import App08 from "./08SingleSharedHandlerForAllEvents/App";
// import App09 from "./09EmitingAndCapturingFromSubmissionEvent/App";
// import App10 from "./10TwoWayBinding/App";
// import App11 from "./11ChildToParentDataSendingOneLevelOnly/App";
// import App12 from "./12MultiLevelChildToParentDataSending/App";
// import App13 from "./13MultilvelChildToParentdataUdemylecture/App";
// import App14 from "./14AddingExpenseFilter/App";
import App15 from "./15DerivedorComputedState/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* Listing to clicks */}
    {/* <App00 /> */}

    {/* How Clicks Alone will not change be enough */}
    {/* clicks may change data but it will not rerender component */}
    {/* <App001 /> */}

    {/* change state of data using usestate hook for first time*/}
    {/* <App01 /> */}

    {/* Adding form element using bootstrap predefined forms */}
    {/* <App02 /> */}

    {/* creating form elemnts as per video lecture */}
    {/* <App03 /> */}

    {/* listing to user input */}
    {/* <App04 /> */}

    {/* Wroking with multiple states basic method */}
    {/* <App05 /> */}

    {/* Better method to work with multiple usestates or statechanges */}
    {/* uisng single use change for all objects */}
    {/* <App06 /> */}

    {/* using prevState in setter of useState */}
    {/* <App07 /> */}

    {/* Using Single Shared Handler for all events */}
    {/* <App08 /> */}

    {/* Stop the from submmison */}
    {/* create a JSON of data */}
    {/* <App09 /> */}

    {/* removing values from input elemnets using two way binsing in react*/}
    {/* <App10 /> */}

    {/* sending data from child to parent */}
    {/* only one level */}
    {/* <App11 /> */}

    {/* sending data from child to parent */}
    {/* Multi level */}
    {/* <App12 /> */}

    {/* sending data from child to parent */}
    {/* Multi level */}
    {/* just like udemy lecture */}
    {/* <App13 /> */}

    {/* Adding Expense Filter */}
    {/* <App14 /> */}

    {/* Derived or computed state */}
    <App15 />
  </StrictMode>
);
