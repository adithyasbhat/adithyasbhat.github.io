import React, { useState, useContext } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import firebaseDB from "../../firebase";
import { ProfileInfo } from "../Profile";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Contact() {
  const [fromName, setFromName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setMessageFlag] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClass, setAlertClass] = useState("");

  const pinfo = useContext(ProfileInfo);

  function storeContactInfo(e) {
    e.preventDefault();
    firebaseDB
      .child("profile-communications")
      .push({ name: fromName, emailId, message }, (err) => {
        if (err) {
          console.log(err);
          setAlertMessage(
            "Error occured while sending message, please try again"
          );
          setAlertClass("error");
        } else {
          setFromName("");
          setEmailId("");
          setMessage("");
          setAlertMessage("Message sent successfully");
          setAlertClass("success");
        }
        setMessageFlag(true);
      });
  }

  const closeSnackbar = () => {
    setMessageFlag(false);
  };

  return (
    <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
      <h2 className="h3 text mb-3">Contact</h2>
      <div className="row">
        <div className="col-md-7 d-print-none">
          <div className="my-2">
            <form onSubmit={storeContactInfo}>
              <div className="row">
                <div className="col-6">
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    value={fromName}
                    onChange={(e) => setFromName(e.target.value)}
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-6">
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    name="_replyto"
                    placeholder="Your E-mail"
                    required
                  />
                </div>
              </div>
              <div className="form-group my-2">
                <textarea
                  className="form-control"
                  style={{ resize: "none" }}
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button className="btn btn-primary mt-2" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="col">
          <div className="mt-2">
            <h3 className="h6">Address</h3>
            <div className="pb-2 text-secondary">{pinfo.address}</div>
            <h3 className="h6">Email</h3>
            <div className="pb-2 text-secondary">{pinfo.emailId}</div>
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={showMessage}
        autoHideDuration={6000}
        onClose={closeSnackbar}
      >
        <Alert onClose={closeSnackbar} severity={alertClass}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;
