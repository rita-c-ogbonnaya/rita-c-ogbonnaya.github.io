import { FaRegUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { GoInfo } from "react-icons/go";
import { TiPencil } from "react-icons/ti";





export default function Contact() {
  return (
    <section id="contact">
      <div className="contactus">
        <div className="contactInfo">
          <h4>For More Information:</h4>
          <p>
            <strong>Hotlines:</strong> 07035973706 &amp; 08108112759
          </p>
          <p>
            <strong>Email:</strong> info@ijawdancecontest.ng
          </p>
          <p>
            <strong>Audition Location: </strong> Nitro Studio, Tamara Hall,
            Otiotio Road, Yenagoa, Bayelsa State.
          </p>
        </div>
        <div className="contactform">
          <div className="firstline">
            <div className="inputbox1">
              <FaRegUser className="fa-user" />

              <input type="text" placeholder="Name" required="" />
            </div>
            <div className="inputbox2">
              <BsEnvelope className="fa-envelope" />

              <input type="email" placeholder="Email" required="" />
            </div>
          </div>
          <div className="firstline">
            <div className="inputbox1">
              <LiaPhoneVolumeSolid className="fa-phone-volume" />

              <input type="tel" placeholder="Phone" required="" />
            </div>
            <div className="inputbox2">
              <GoInfo className="fa-info-circle" />

              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="secondline">
            <div className="inputbox3">
              <i className="fa " />
              <TiPencil className="fa-pen" />

              <textarea
                name="message"
                placeholder="How can we help you? Feel free to get in touch!"
                defaultValue={""}
              />
            </div>
          </div>
          <button>Get In Touch</button>
        </div>
      </div>
    </section>
  );
}
