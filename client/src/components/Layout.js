import { Fragment, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Signature from "./Signature";

const Layout = () => {
  const [showSideBar, setShowSidebar] = useState(false);
  const [showSignature, setSignature] = useState(false);

  const checkNavTab = (id) => {
    if (id === "b2") setShowSidebar(!showSideBar);
  };

  const checkTab = (id) => {
    if (id === "b1") setSignature(!showSignature);
  };
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row text-end strip">
          <div className="col-sm-12">
            <i
              className="fas fa-sign-out-alt me-2"
              onClick={(e) => console.log("Logged out")}
            ></i>
            <i
              className="fas fa-question"
              onClick={(e) => console.log("Help")}
            ></i>
          </div>
        </div>
        <div className="row canvas">
          <div className="col-sm-1">
            <Navbar tab={checkNavTab} />
          </div>
          <div className="col-sm-2">
            {showSideBar && <Sidebar tab={checkTab} />}
          </div>
          <div className="col-sm-9">{showSignature && <Signature />}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
