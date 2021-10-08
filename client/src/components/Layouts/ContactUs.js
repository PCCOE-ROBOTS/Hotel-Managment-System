import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useHistory } from "react-router-dom";

const ContactUs = () => {
  const history = useHistory();
  const redirect = () => {
    history.push(history.location.pathname);
  };
  useEffect(() => {
    Aos.init({ duration: 1500 });
    redirect();
  }, []);

  return (
    <div>
      <div className="container contact-form-container">
        <div className=" col-sm-12 col-lg-5 contact-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="mb-3">
              <input
                className="form-control "
                type="text"
                name="name"
                placeholder="Name"
                value=""
                onChange={(e) => {}}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                value=""
                onChange={(e) => {}}
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                name="message"
                placeholder="Message"
                rows="4"
                required="true"
              ></textarea>
            </div>

            <button className="btn btn-primary login-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
