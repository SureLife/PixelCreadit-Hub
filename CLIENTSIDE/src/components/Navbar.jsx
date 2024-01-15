import React, { useState, useContext } from "react";
import { MyContext } from "../context/MyContext";
import SlidingPane from "react-sliding-pane";
import defaultAvatar from "../assets/images/defaultAvatar.png";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/images/Logo.png";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faUser,
  faCloudArrowUp,
  faBookmark,
  faCaretUp,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
//import UserProfile from "../pages/UserProfile";
import "./Navbar.css";

function Navbar() {
  const { state, dispatch } = useContext(MyContext);
  const { user, slideMenuOpen } = state;
  const navigate = useNavigate();

  const profileImage = user ? user.profileImage : null;
  console.log(user);

  // Handle the removal of the token on logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const toggleMenu = () => {
    dispatch({
      type: "setSlideMenuOpen",
      payload: { isPaneOpen: !slideMenuOpen.isPaneOpen },
    });
  
    console.log("User:", user); // Log user after dispatching the action
  };
  return (
    <div className="nav-bar">
      <ul className="nav-links">
        <li>
          <Link to="/">
            <img src={logoImage} alt="Logo" className="logo" />
          </Link>
        </li>

        <li>
          <Link className="nav-hover category" to="/categories">
            CATEGORIES
          </Link>
        </li>
        <li>
          <Link className="nav-hover about" to="/aboutus">
            ABOUT US
          </Link>
        </li>
        <li>
          <Link className="nav-hover contact" to="/contactus">
            CONTACT US
          </Link>
        </li>
      </ul>

      <ul className="user-actions">
        <li>
          {user ? (
            <div className="loggedIn">
              <div className="menu-icon" onClick={toggleMenu}>
                <img
                  src={profileImage || defaultAvatar}
                  alt="Profile"
                  className="profile-avatar"
                />
              </div>
              {user && (
                <SlidingPane
                  className="menuClass"
                  overlayClassName="menuOverlay"
                  isOpen={slideMenuOpen.isPaneOpen}
                  width="300px"
                  title={`Welcome, ${user.name}`}
                  onRequestClose={() =>
                    dispatch({
                      type: "setSlideMenuOpen",
                      payload: { isPaneOpen: false },
                    })
                  }
                >
                  {/* Options in the sliding pane */}
                  <ul>
                    <li>
                      <Link to="/userprofile">
                        <FontAwesomeIcon
                          className="slideIcon"
                          icon={faUser}
                          style={{ color: "#000000" }}
                        />
                        <p>PROFILE</p>
                      </Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/userprofile">
                        <FontAwesomeIcon
                          className="slideIcon"
                          icon={faCloudArrowUp}
                          style={{ color: "#000000" }}
                        />
                        <p>UPLOAD IMAGES</p>
                      </Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/userprofile">
                        <FontAwesomeIcon
                          className="slideIcon"
                          icon={faBookmark}
                          style={{ color: "#000000" }}
                        />
                        <p>LIBRARY</p>
                      </Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/userprofile">
                        <FontAwesomeIcon
                          className="slideIcon"
                          icon={faCaretUp}
                          style={{ color: "#000000" }}
                        />
                        <p>TOP-UP CREDITS</p>
                      </Link>
                    </li>
                  </ul>
                  <div className="centerLogout">
                    <button id="logout" onClick={handleLogout}>
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        style={{ color: "#000000" }}
                      />
                      LOGOUT
                    </button>
                  </div>
                  <div className="slideFooter">
                    <div className="redirects">
                      <Link to="/">
                        <p>HOME</p>
                      </Link>
                      <Link to="/categories">
                        <p>CATEGORIES</p>
                      </Link>
                      <Link to="/aboutus">
                        <p>ABOUT</p>
                      </Link>
                      <Link to="/contactus">
                        <p>CONTACT</p>
                      </Link>
                    </div>
                    <div className="us4">
                      <p>@2024</p>
                      <p>
                        <a
                          href="https://github.com/Masouma-Rasouli"
                          target="_blank"
                        >
                          Masouma,
                        </a>
                        <a
                          href="https://github.com/NehaMehta2005"
                          target="_blank"
                        >
                          Neha,
                        </a>
                        <a href="https://github.com/SureLife" target="_blank">
                          Daniel,
                        </a>
                        <a href="https://github.com/Julz1997" target="_blank">
                          Julian
                        </a>
                      </p>
                    </div>
                  </div>
                </SlidingPane>
              )}

              <Link to="/shoppingcart" className="shopping-cart">
                <Button
                  buttonText={<FontAwesomeIcon icon={faCartArrowDown} />}
                  className="BTN"
                  /* onClick={handleSearch} */
                />
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login" className="nav-link">
                Log-in
              </Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
