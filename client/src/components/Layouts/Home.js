import React, { useEffect, useContext } from "react";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import axios from "axios";
import { UserData } from "../../App";
// import techHead from "../../images/tech-head.png";

const Home = () => {
  const contextuserData = useContext(UserData);
  useEffect(() => {
    Aos.init({ duration: 1000 });
    //   try {
    //     axios
    //       .get(`http://localhost:8080/get_current_user`)
    //       .then((res) => {
    //         contextuserData.setuser(res.data);
    //         console.log(res.data);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   } catch (error) {}
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <section className="home">
        <div className="container disp-center" data-aos="fade-in">
          <div className="desc">
            {/* <img className="tech-head" src={techHead} alt="tech-head" /> */}
            <Typewriter
              onInit={(typewriter) => {
                setInterval(() => {
                  typewriter
                    .typeString("Hotel Management System!")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }, 1000);
              }}
            />
            {/* <p>Our Tagline</p> */}

            {/* <hr /> */}
          </div>
        </div>
      </section>
      <section>
        <div className="container login-btn">
          <div className="row">
            <Link to="/login">
              <button
                className="btn"
                onClick={scrollToTop}
                style={{ marginBottom: "1rem" }}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
