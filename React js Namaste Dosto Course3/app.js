import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },

//   [
//     React.createElement(
//       "div",
//       { id: "chaild" },
//       React.createElement("h1", { id: "heading2" }, "I am Heading tag"),
//       React.createElement("h2", { id: "h2" }, "I am Heading 2 tag")
//     ),
//   ],

//   [
//     React.createElement(
//       "div",
//       { id: "chaild2" },
//       React.createElement("h1", { id: "heading2" }, "I am Heading tag"),
//       React.createElement("h2", { id: "h2" }, "I am Heading 2 tag")
//     ),
//   ]
// );

// const jsxHeading =  <h1 id="heading 1">This is JSX</h1>;
//.....................................................................
const Title = () => (
  <h1 id="heading 1">This is Title in component</h1>
);

const Heading = () => (
  <div id="container" className="div1">
    <Title/>
    <h2 id="heading 2">This is Heading in component</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
