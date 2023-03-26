import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log("prehydration");
ReactDOM.hydrate(<App />, document.querySelector("#root"));
// const root = document.querySelector("#root");
// const button = document.createElement("button");
// button.textContent = "Click";
// button.addEventListener("click", () => {
//   console.log("clicked");
// });

// root.appendChild(button);
console.log("posthydration");
