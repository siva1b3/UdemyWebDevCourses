import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

// if you imported an element
// we will import all the css belongs to that element
// same order as the elements imported
// so that
// css in last element inported will have high priotity
// as it is the last css file imported

// import App00 from "./03ReactBasics/000Components/App";
// import App01 from "./03ReactBasics/01buildingfirstcomponent/App";
// import App02 from "./03ReactBasics/02complexJSX/App";
// import App03 from "./03ReactBasics/03AddCsstoreact/App";
// import App0302 from "./03ReactBasics/0302InlineStylesinJsx/App";
// import App04 from "./03ReactBasics/04DynamicdatainJSX/App";
// import App05 from "./03ReactBasics/05-SendingDataViaProps/App";
// import App06 from "./03ReactBasics/06SendingDataViaPropsMethod2/App";
// import App07 from "./03ReactBasics/07SendingDataViaPropsMethod3/App";
// import App08 from "./03ReactBasics/08addingJsMethodsToJSXElements/App";
// import App09 from "./03ReactBasics/09SplittingIntoSamllComponents/App";
// import App10 from "./03ReactBasics/10ExpensesJsxExtracedFromApp/App";
// import App11 from "./03ReactBasics/11CreateComponentsUsingVariables/App";
// import App12 from "./03ReactBasics/12CreateComponentsUsingForLoop/App";
// import App13 from "./03ReactBasics/13CreateComponentsUsingForOf/App";
// import App14 from "./03ReactBasics/14CreateComponentsUsingMap/App";
// import App15 from "./03ReactBasics/15porpsChildAndChildClasses/App";
import App16 from "./03ReactBasics/16CreateReactElementManually/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <App00 /> */}

    {/* Our first componet or basic component */}
    {/* <App01 /> */}

    {/* More complex jsx component */}
    {/* <App02 /> */}

    {/* Adding css to js file in the component level 
        just next to component file*/}
    {/* <App03 /> */}

    {/* Adding inline styles in jsx */}
    {/* <App0302 /> */}

    {/* adding dynamic data to component */}
    {/* removing static data and 
        started uisng varibles inside the component to read data */}
    {/* <App04 /> */}

    {/* Sending dynamic data into components vaiables or components
        from parent components
        using props object 
        as mitiple individual objects 
        that were reassined to variables in component
        Method 01*/}
    {/* <App05 /> */}

    {/* Sending dynamic data into components vaiables or components
        from parent components
        using props object 
        all data was sent in single object
        Method 02 */}
    {/* <App06 /> */}

    {/* Sending dynamic data into components vaiables or components
        from parent components
        using props object 
        all data was sent in single object
        that was destructured in compoent parameters
        Method 03 */}
    {/* <App07 /> */}

    {/* Adding plain js code in react */}
    {/* <App08 /> */}

    {/* Splitting Into Samll Components */}
    {/* <App09 /> */}

    {/* make app more modular 
        export everyting from app componet */}
    {/* expenses was moved to new component from 
        app componet */}
    {/* <App10 /> */}

    {/* Creating componets using vaiables,
        arrays and objects */}
    {/* <App11 /> */}

    {/* Creating componets using for loop
        and array push method */}
    {/* <App12 /> */}

    {/* Creating componets using for of loop
        and array push method */}
    {/* <App13 /> */}

    {/* Creating componets using map method */}
    {/* <App14 /> */}

    {/* Wrapper components or Wrapper custom HTML Tags created in react */}
    {/* <App15 /> */}

    {/* CreateReactElementManually */}
    {/* using React.createElement() */}
    <App16 />
  </StrictMode>
);
