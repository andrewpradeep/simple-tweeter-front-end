import ReactDom from "react-dom";
import React from "react";
import "./styles/index.scss";
import Home from "./js/pages/Home";

const rootElement  = document.getElementById("root");

ReactDom.render(<Home/>,rootElement);
