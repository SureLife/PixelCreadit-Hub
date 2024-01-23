import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Member.css";
import profileLogo from "../assets/images/profileLogo.png";
// import logo from "../assets/images/Logo.png";

const backendURL = `http://localhost:5500`;

function Member() {
  const { memberName } = useParams();
  const { state, dispatch } = useContext(MyContext);
  const { singleMember } = state;

  useEffect(() => {
    async function fetchMemberDetails() {
      try {
        const response = await axios.get(`${backendURL}/members/${memberName}`);
        dispatch({ type: "setsingleMember", payload: response.data });
      } catch (error) {
        console.error("Error fetching member details:", error);
      }
    }

    fetchMemberDetails();
  }, []);

  return (
    <div className="px-lg-5 container-fluid d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgb(244,245,246)', minHeight: '100vh' }} id="tns2-item2">
      <div className="row gx-5">
        <div className="col-lg-6 text-center order-lg-1 order-2">
          <img
            src={profileLogo}
            alt=""
            style={{ maxWidth: "40%", height: "auto" }}
          />
          <h1 className="mb-0 text-black-50">
            {singleMember.name}{" "}
            <span className="text-black">{singleMember.lastname}</span>
          </h1>
          <div className="subheading mb-5">
            The next big idea is waiting for its next big changer with <Link to="/">PixelCreditHub</Link>
           
          </div>
          <p className="mb-5 text-justify" style={{ maxWidth: "500px", margin: "auto" }}>
            Role: {singleMember.role}
          </p>

          <p className="mb-5 text-justify" style={{ maxWidth: "500px", margin: "auto" }}>
            {singleMember.like}
          </p>

          <ul className="list-inline list-social-icons mb-0">
            <li className="list-inline-item">
              <Link
                className="socialLink"
                to={singleMember.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                className="socialLink"
                to={singleMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                className="socialLink"
                to={singleMember.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} /> Twitter
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                className="socialLink"
                to={singleMember.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 text-center order-lg-2 order-1">
          <img
            className="d-block me-lg-n5 flex-shrink-0"
            src={singleMember.image}
            alt={`${singleMember.name} ${singleMember.lastname}`}
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Member;
