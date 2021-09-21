import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdHighQuality } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { Link } from "react-router-dom";
// import techHead from "../../images/tech-head.png";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    // document.title = "";
  }, []);

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
            <p>Our Tagline</p>
            <hr />
          </div>
        </div>
      </section>
      <section>
        <div className="container login-btn">
          <div className="row">
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
