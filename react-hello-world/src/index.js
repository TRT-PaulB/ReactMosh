import React from "react";
// needed because under the hood react will call React.createElement

import ReactDOM from "react-dom";
// needed because we want to render our element on the actual DOM

const element = <h1>Hello World!!!!</h1>;
ReactDOM.render(element, document.getElementById("root"));
// this will render the element inside the root element in index.html

//console.log(element);
