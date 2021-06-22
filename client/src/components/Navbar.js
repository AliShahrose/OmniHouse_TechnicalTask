import { Fragment, useState } from "react";

const Navbar = ({ tab }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Fragment>
      <div className="row d-flex flex-column navbar-theme">
        <div className="col-sm-12 mt-3">
          <i className="far fa-user-circle fa-2x"></i>
          <hr />
        </div>
        <div className="col-sm-12">
          <i className="fas fa-calendar-check fa-2x"></i>
          <p>OmniCheck</p>
        </div>
        <div
          className="col-sm-12"
          onClick={(e) => {
            setShowSidebar(!showSidebar);
            tab("b2");
          }}
        >
          <i className="fas fa-file-signature fa-2x"></i>
          <p>Contract Builder</p>
        </div>
        <div className="col-sm-12">
          <i className="fas fa-file-alt fa-2x"></i>
          <p>OmniNews</p>
        </div>
        <div className="col-sm-12 align-items-end">
          <i className="fas fa-file-import fa-2x"></i>
          <p>OmniScan</p>
        </div>
      </div>
      {/* <div className="row d-flex flex-column justify-content-end navbar-end navbar-theme">
        <div className="col-sm-12">
          <i className="fas fa-calendar-check fa-2x"></i>
          <p>OmniCheck</p>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Navbar;
