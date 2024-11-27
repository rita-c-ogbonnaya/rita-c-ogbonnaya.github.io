import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { BsMouse } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { GoSun } from "react-icons/go";
import Button from "./Button";
import Image from "next/image";
import Logo from "../public/assets/image/logo.png";
import Bottomlightimg from "../public/assets/image/shape-top-white-80.png";
import Bottodarkimg from "../public/assets/image/shape-top-black-80.png";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../pages";
import { useContext } from "react";
export default function Header() {
  const {theme, switchmode} = useContext(ThemeContext)
  return (
    <>
      {/* Header section */}
      <section className="headersection" style={{ position: "relative" }}>
        {/* image carousel */}
        <AliceCarousel
          autoPlay
          infinite
          autoPlayInterval={3000}
          disableButtonsControls
          className="owl-carousel"
        >
          <div className="backgroundimg1" />
          <div className="backgroundimg2" />
          <div className="backgroundimg3" />
        </AliceCarousel>
        <nav className="navbar">
          <a href="#">
            <Image width={100} height={80} src={Logo.src} alt="Logo Image" />
          </a>
          <ul>
            <li>
              <a href="#intro">Intro</a>
            </li>
            <li>
              <a href="#countdown">Countdown</a>
            </li>
            <li>
              <a href="#note">Note</a>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <Button text="Call Us" leftIcon={<FaPhoneAlt />} />
          <button onclick="switchmode()" className="switchmodebtn">
            <ReactSwitch
              className="fa-sun"
              onChange={switchmode}
              checked={theme === "dark"}
              id="theme"
            />
          </button>
          <FaBarsStaggered className="fa-bars" />
        </nav>
        {/* Nav Section */}
        <div className="con1">
          <header id="intro">
            <div className="header-content">
              <p className="italic">imomotimi foundation presents</p>
              <h1 className="big">Imomotimi Ijaw</h1>
              <h1 className="big">Dance Contest 2024</h1>
              <Button text="Download Entry Form" rightIcon={<FaDownload />} />

              <p className="solid">
                All duly filled out forms and the entry fees should be brought
                along to the audition.
              </p>
              <a href="#countdown">
                <BsMouse className="fa-computer-mouse" />
              </a>
            </div>
          </header>
        </div>
        <Image
          width={2000}
          height={100}
          src={theme === "dark" ? Bottodarkimg.src : Bottomlightimg.src}
          alt=""
          className="bottomimg"
          id="topwhite"
          style={{ position: "absolute", bottom: 0 }}
        />
      </section>
    </>
  );
}
