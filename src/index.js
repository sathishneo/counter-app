import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import registerServiceWorker from "./registerServiceWorker";
import Counters from "./components/counters";

ReactDOM.render(<Counters />, document.getElementById("root"));
