import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // notice navbar and body padding specified here
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

// FONT AWESOME [start]
import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStroopwafel,
  faHeart,
  faHeartBroken
} from "@fortawesome/free-solid-svg-icons";
library.add(faStroopwafel);
library.add(faHeart);
library.add(faHeartBroken);
//https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/free-solid-svg-icons
// see https://github.com/FortAwesome/react-fontawesome
// FONT AWESOME [end]

// deployment
// process represents the current process
// env is the environment variables (set in .env files for directly from terminal)
// values are set when performing npm start
console.log(process.env);

// select bundle.js in Chrome / Sources:
// console / sources, // localhost / static / js / bundle.js
// notice this comes out as dev content
console.log("SUPERMAN", process.env.REACT_APP_NAME);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
