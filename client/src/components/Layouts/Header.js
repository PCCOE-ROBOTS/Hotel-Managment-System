import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { FaRegQuestionCircle, FaUserAlt } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { VscOrganization } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";
import "../../Styles/main.css";
// import Logo from "../../images/HexTechSoft1.png";

function Header(props) {
  const scrollToTop = () => {
    removeShow();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const removeShow = () => {
    document.getElementById("navbarNavDropdown").classList.remove("show");
    document.getElementById("btn-toggle").classList.add("collapsed");
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => {
  //     const nav = document.querySelector(".bg-dark");
  //     if (window.pageYOffset > 100) {
  //       nav.classList.remove("transparent");
  //     } else {
  //       nav.classList.add("transparent");
  //     }
  //   });
  // }, [])

  return (
    <div className="app-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to={""} onClick={scrollToTop}>
            {/* <img
              // src={Logo}
              alt={"Logo"}
              style={{ height: "55px", width: "110px" }}
            /> */}
          </Link>
          <button
            className="navbar-toggler"
            id="btn-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                  to={"/"}
                  onClick={scrollToTop}
                >
                  <RiHome2Line style={{ marginRight: 5, marginBottom: 4 }} />
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={"/about"}
                  onClick={scrollToTop}
                >
                  <VscOrganization
                    style={{ marginRight: 5, marginBottom: 4 }}
                  />
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={"/contact"}
                  onClick={scrollToTop}
                >
                  <FiMail style={{ marginRight: 5, marginBottom: 4 }} />
                  Contact Us
                </NavLink>
              </li>
              {props.user.user && props.user.user.username ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to={"/profile"}
                      onClick={scrollToTop}
                    >
                      <FaUserAlt style={{ marginRight: 5, marginBottom: 4 }} />
                      {props.user.user.username}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      // to={"/logout"}
                      href="/"
                      onClick={() => {
                        scrollToTop();
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                ""
              )}

              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={""}
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </Link> */}
              {/* <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to={null}>
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={null}>
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={null}>
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
