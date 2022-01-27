import React from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "./App.css";
import { Link } from "react-router-dom";
//
const App = () => {
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="wrapper">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/normal">
          <ButtonComponent cssClass="e-success">Normal</ButtonComponent>
        </Link>
        <Link to="/dynamic">
          <ButtonComponent cssClass="e-warning">Dynamic</ButtonComponent>
        </Link>
      </div>
    </div>
  );
};

export default App;
