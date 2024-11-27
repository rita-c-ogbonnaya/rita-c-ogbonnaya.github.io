
import { FaArrowUpLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";





export default function Contact() {
    return (
      <footer>
        <div
          onclick="window.scrollTo({top:0, behavior: 'smooth'})"
          className="scroll-up-btn"
          id="scrollUpBtn"
        >
          <FaArrowUpLong className="fa-arrow-up" />
        </div>
        <div className="footer-content">
          <div className="social-media">
            <h3>We Are Social</h3>
            <div className="social-icons">
              <a href="#">
                <span className="icon">
                  <FaFacebookF className="fa-facebook-f" />
                </span>
              </a>
              <a href="#">
                <span className="icon">
                  <FaTwitter className="fa-facebook-f" />
                </span>
              </a>
              <a href="#">
                <span className="icon">
                  <RiInstagramFill className="fa-facebook-f" />
                </span>
              </a>
              <a href="#">
                <span className="icon">
                  <IoLogoYoutube className="fa-facebook-f" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Imomotimi Foundation. All Rights Reserved.</p>
        </div>
      </footer>
    );
}