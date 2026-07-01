import { Link } from "react-router-dom";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "./App.css";

const App = () => {
  return (
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
