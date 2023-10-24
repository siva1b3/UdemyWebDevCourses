import React from "react";

// if you imported an element
// we will import all the css belongs to that element
// same order as the elements imported
// so that
// css in last element inported will have high priotity
// as it is the last css file imported

// import App00 from "./000Components/App";
// import App01 from "./01buildingfirstcomponent/App";
// import App02 from "./02complexJSX/App";
// import App03 from "./03AddCsstoreact/App";
// import App0302 from "./0302InlineStylesinJsx/App";
// import App04 from "./04DynamicdatainJSX/App";
// import App05 from "./05-SendingDataViaProps/App";
// import App06 from "./06SendingDataViaPropsMethod2/App";
// import App07 from "./07SendingDataViaPropsMethod3/App";
import App08 from "./08addingJsMethodsToJSXElements/App";
// import App09 from "./09SplittingIntoSamllComponents/App";
// import App10 from "./10ExpensesJsxExtracedFromApp/App";
// import App11 from "./11CreateComponentsUsingVariables/App";
// import App12 from "./12CreateComponentsUsingForLoop/App";
// import App13 from "./13CreateComponentsUsingForOf/App";
// import App14 from "./14CreateComponentsUsingMap/App";
// import App15 from "./15porpsChildAndChildClasses/App";
// import App16 from "./16CreateReactElementManually/App";

function App() {
  return (
    <React.Fragment>
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
      <App08 />

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
      {/* <App16 /> */}
    </React.Fragment>
  );
}
export default App;
