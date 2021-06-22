import { Fragment, useState, useEffect } from "react";
import jsPDF from "jspdf";
import { random } from "../utilities";

const Signature = () => {
  const [otpState, setOtpState] = useState(random());
  useEffect(() => {
    //setOtpState(random())
    console.log("One-Time Password:", otpState);
  }, [otpState]);

  const [previewSource, setPreviewSource] = useState("");
  const [typeText, setTypeText] = useState(false);
  const [draw, setDraw] = useState(false);
  const [submitError, setSubmitError] = useState({
    status: false,
    text: "",
  });
  const [formData, setFormData] = useState({
    type: "",
    uploaded: "",
    otp: "",
  });

  const { type, otp, uploaded } = formData;

  const selectedImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData({ ...formData, uploaded: reader.result });
      setPreviewSource(reader.result);
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (type === "" && uploaded === "") {
      setSubmitError({
        status: true,
        text: "Please submit a signature from the above options.",
      });
      return setTimeout(
        () =>
          setSubmitError({
            ...submitError,
            status: false,
          }),
        3000
      );
    }

    if (parseInt(otp) !== otpState) {
      setSubmitError({
        status: true,
        text: "Invalid OTP! Please enter a valid OTP or request a new one.",
      });
      return setTimeout(
        () =>
          setSubmitError({
            ...submitError,
            status: false,
          }),
        3000
      );
    }

    const pdf = new jsPDF("p", "pt");
    pdf.text(20, 20, "OmniHouse Contract Builder Signature:");
    pdf.setFont("helvetica");
    type !== "" && pdf.text(type, 50, 50);
    uploaded !== "" && pdf.addImage(uploaded, "JPEG", 50, 100, 180, 160);
    pdf.save("signature-file.pdf");

    setFormData({
      type: "",
      uploaded: "",
      otp: "",
    });
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <div className="container-fluid signature-container">
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <form
              className="form signature-form pt-2 pb-3 ps-5 pe-5"
              id="signature-form"
              onSubmit={(e) => {
                onSubmit(e);
              }}
            >
              <div className="row">
                <div className="col-sm-12">
                  <h4>Please select the Signature</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <button
                    type="button"
                    className="signature-button pink"
                    onClick={(e) => {
                      setDraw(!draw);
                      setTimeout(() => setDraw(false), 3000);
                    }}
                  >
                    <b>Draw</b>
                  </button>
                </div>
                <div className="col-sm-4">
                  <button
                    type="button"
                    className="signature-button pink"
                    onClick={(e) => setTypeText(!typeText)}
                  >
                    <b>Type</b>
                  </button>
                </div>
                <div className="col-sm-4">
                  <label
                    className="signature-button upload-button"
                    htmlFor="upload"
                  >
                    <b>Upload</b>
                  </label>
                </div>
              </div>
              <input
                type="file"
                id="upload"
                name="image"
                onChange={selectedImage}
                accept="image/*"
                hidden
              />
              <div className="row">
                <div className="col-sm-12 preview">
                  {draw && (
                    <p>Draw functionality is currently not supported.</p>
                  )}
                  {typeText && (
                    <input
                      type="text"
                      placeholder="Enter Signature Here"
                      name="type"
                      value={type}
                      onChange={(e) => onChange(e)}
                      className="form-input text-center"
                    />
                  )}
                  {previewSource && <img src={previewSource} alt="Selected" />}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <h4>Please verify it is you:</h4>
                  <p>
                    <b>
                      A one-time password has been sent to your registered email
                    </b>
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-6">
                  <input
                    type="text"
                    placeholder="Enter OTP (One time password)"
                    name="otp"
                    value={otp}
                    onChange={(e) => onChange(e)}
                    className="form-input text-center"
                    required
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-6">
                  <button
                    type="button"
                    className="signature-button"
                    onClick={(e) => setOtpState(random())}
                  >
                    <b>Re-send OTP</b>
                  </button>
                </div>
              </div>
              {submitError.status && (
                <div className="alert alert-danger" role="alert">
                  {submitError.text}
                </div>
              )}
            </form>
            <div className="row justify-content-center mt-3 ps-5 pe-5">
              <div className="col-sm-6">
                <button
                  className="signature-button submit-button"
                  type="submit"
                  form="signature-form"
                >
                  Sign Contract <i className="far fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signature;
