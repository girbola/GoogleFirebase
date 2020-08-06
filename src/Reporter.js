import React from "react";
import "./App.css";

const Reporter = (props) => {
  return(
  <div>{props.name}: {props.children}</div>);
};

export default Reporter;
