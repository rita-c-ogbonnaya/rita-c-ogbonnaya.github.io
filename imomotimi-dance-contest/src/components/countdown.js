import Image from "next/image";
import Bottomlightimg from "../public/assets/image/shape-top-grey-80.png";
import Bottomdarkgrey from "../public/assets/image/shape-top-dark-grey-80.png";


import React, { useEffect, useState } from "react";
/**
 * A countdown timer component that displays the days, hours, minutes and seconds remaining to the audition date.
 * The timer is updated every 1 second and the countdown target time is set to 100 seconds from the current time.
 * @returns {JSX.Element} The countdown timer component.
 */

/**
 * A countdown timer component that displays the days, hours, minutes and seconds remaining to the audition date.
 * The timer is updated every 1 second and the countdown target time is set to 100 seconds from the current time.
 * @returns {JSX.Element} The countdown timer component.
 */
export default function Countdown({theme}) {
  const time = 1_000;
  const countdownDate = new Date().setSeconds(new Date().getSeconds() + 100000);

  const [timerElements, setTimerElements] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /**
   * Starts the countdown timer.
   * Calculates the difference between the current time and the countdown target time
   * and sets the timerElements state to the days, hours, minutes and seconds remaining.
   * @function
   * @returns {void}
   */
  const startCountdown = () => {
    const now = new Date().getTime();
    const countdown = new Date(countdownDate).getTime();
    const difference = (countdown - now) / 1000;

    setTimerElements({
      days: Math.floor(difference / (60 * 60 * 24)),
      hours: Math.floor((difference % (60 * 60 * 24)) / (60 * 60)),
      minutes: Math.floor((difference % (60 * 60)) / 60),
      seconds: Math.floor(difference % 60),
    });
  };

  useEffect(() => {
    setInterval(startCountdown, time);
  }, []);

  // Update the countdown every 1 second (1000 milliseconds)
  // const countdownInterval = setInterval(updateCountdown, 1000);

  return (
    <>
      {/* Countdown Section */}
      <section id="countdown" style={{position: "relative"}}>
        <div className="countdownsection">
          <h1>Countdown to Audition</h1>
          <div className="countdown">
            <ul id="timer-container">
              <li>
                <span>{timerElements.days}</span>
                days
              </li>
              <li>:</li>
              <li>
                <span>{timerElements.hours}</span>
                hours
              </li>
              <li>:</li>
              <li>
                <span>{timerElements.minutes}</span>
                minutes
              </li>
              <li>:</li>
              <li>
                <span>{timerElements.seconds}</span>
                seconds
              </li>
            </ul>
          </div>
        </div>
        <Image
          width={2000}
          height={100}
          src={theme === "dark" ? Bottomdarkgrey.src : Bottomlightimg.src}
          alt=""
          className="bottomimg"
          id="topgrey"
          style={{ position: "absolute", bottom: 0 }}
        />
      </section>
    </>
  );
}
