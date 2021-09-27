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
      <section id="contact" data-aos="fade-up">
        <div className="contact-clean row">
          <div style={{ textAlign: "center", width: "100%" }}>
            <h3 className="text-center">
              <span>Contact us</span>
            </h3>
          </div>

          {/* <div className="col-md-6 contact-img">
            <img className="contact-side-img" src={ContactImg} alt="contact" />
          </div> */}
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="row">
              <div className="col-md-12" style={{ padding: "0" }}>
                <form>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      rows="14"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary" type="submit">
                      send{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
