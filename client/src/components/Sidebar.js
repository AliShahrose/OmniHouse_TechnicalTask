import { Fragment, useState } from "react";

const Sidebar = ({ tab }) => {
  const [buttonClass] = useState("sidebar-button");

  const changeButton = (buttonId) => {
    tab(buttonId);
    const ids = ["b1", "b2", "b3", "b4"];
    ids.map((id) =>
      id === buttonId
        ? (document.getElementById(id).style.background = "#93227f")
        : (document.getElementById(id).style.background = "none")
    );
  };

  return (
    <Fragment>
      <div className="row d-flex flex-column navbar-theme">
        <p>
          <b>Contract Builder</b>
        </p>
        <div className="col-sm-12 mt-3">
          <button
            className={buttonClass}
            id="b1"
            onClick={(e) => changeButton("b1")}
          >
            <i className="fas fa-plus"></i> Create tenency contract
          </button>
        </div>
        <div className="col-sm-12 mt-3">
          <button
            className={buttonClass}
            id="b2"
            onClick={(e) => changeButton("b2")}
          >
            <i className="fas fa-circle" style={{ color: "#d78f24" }}></i>{" "}
            Active tenency contract
          </button>
        </div>
        <div className="col-sm-12 mt-3">
          <button
            className={buttonClass}
            id="b3"
            onClick={(e) => changeButton("b3")}
          >
            <i className="fas fa-circle" style={{ color: "#ae3f9b" }}></i> Draft
            tenency contract
          </button>
        </div>
        <div className="col-sm-12 mt-3">
          <button
            className={buttonClass}
            id="b4"
            onClick={(e) => changeButton("b4")}
          >
            <i className="fas fa-circle" style={{ color: "#51b64f" }}></i>{" "}
            Signed tenency contract
          </button>
        </div>
        <hr />
        <div className="scroll">
          <h4>Table of Contents</h4>
          <p>
            <b>Section 1</b>
          </p>
          <p>1.1:Part A</p>
          <p>1.2:Part B</p>
          <p>1.3:Part C</p>
          <p>1.4:Part D</p>
          <p>
            <b>Section 2</b>
          </p>
          <p>2.1:Part A</p>
          <p>2.2:Part B</p>
          <p>2.3:Part C</p>
          <p>2.4:Part D</p>
          <p>
            <b>Section 3</b>
          </p>
          <p>3.1:Part A</p>
          <p>3.2:Part B</p>
          <p>3.3:Part C</p>
          <p>3.4:Part D</p>
          <p>
            <b>Section 4</b>
          </p>
          <p>4.1:Part A</p>
          <p>4.2:Part B</p>
          <p>4.3:Part C</p>
          <p>4.4:Part D</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
