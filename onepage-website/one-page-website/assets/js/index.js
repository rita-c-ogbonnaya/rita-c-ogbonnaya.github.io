function switchmode() {
  const themestyle = document.getElementById("theme");
  if (themestyle.getAttribute("href") === "assets/css/light.css") {
    document
      .getElementById("theme")
      .setAttribute("href", "assets/css/dark.css");
    document.getElementById("theme-icon").className = "fa fa-moon";
    document.getElementById("topwhite").src =
      "assets/image/shape-top-black-80.png";
    document.getElementById("topgrey").src =
      "assets/image/shape-top-dark-grey-80.png";
    document.getElementById("topgrey2").src =
      "assets/image/shape-top-dark-grey-80.png";
  } else {
    document
      .getElementById("theme")
      .setAttribute("href", "assets/css/light.css");
    document.getElementById("theme-icon").className = "fa fa-sun";
    document.getElementById("topwhite").src =
      "assets/image/shape-top-white-80.png";
    document.getElementById("topgrey").src =
      "assets/image/shape-top-grey-80.png";
    document.getElementById("topgrey2").src =
      "assets/image/shape-top-grey-80.png";
  }
}

// for settimng countdown as a future date with 24 hour format
// let countdownDate = new Date('01 January 2025 00:00')

// for settimng countdown date by adding hours to the current date
// let countdownDate = new Date().setHours(new Date().getHours() + 1)

// for settimng countdown date by adding minutes to the current date
// let countdownDate = new Date().setMinutes(new Date().getMinutes() + 1)

let countdownDate = new Date().setSeconds(new Date().getSeconds() + 100000);

let timerInterval;
const daysElem = document.querySelector("#days"),
  hoursElem = document.querySelector("#hours"),
  minutesElem = document.querySelector("#minutes"),
  secondsElem = document.querySelector("#seconds"),
  timerRunningContent = document.querySelector("#timer-running");

const formatTime = (time, string) => {
  return time == 1
    ? `<span> ${time}</span> ${string}`
    : `<span> ${time}</span> ${string}s`;
};

const startCountdown = () => {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();
  const difference = (countdown - now) / 1000;

  // if (difference < 1) {
  //     endCountdown()
  // }

  let days = Math.floor(difference / (60 * 60 * 24));

  let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));

  let minutes = Math.floor((difference % (60 * 60)) / 60);
  let seconds = Math.floor(difference % 60);

  daysElem.innerHTML = formatTime(days, "day");
  hoursElem.innerHTML = formatTime(hours, "hour");
  minutesElem.innerHTML = formatTime(minutes, "minute");
  secondsElem.innerHTML = formatTime(seconds, "second");
};

// const endCountdown = () => {
//     clearInterval(timerInterval)
//     timerRunningContent.classList.add('hidden')
//     timrtEndContent.classList.add('visible')
// }

window.addEventListener("load", () => {
  startCountdown();
  timerInterval = setInterval(startCountdown, 1000);
});

// const targetDate = new Date("December 31, 2024 23:59:59").getTime();

// function updateCountdown() {
//     const now = new Date().getTime();
//     const timeRemaining = targetDate - now;

//     const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//     document.querySelector('.days').textContent = days < 10 ? `0${days}` : days;
//     document.querySelector('.hours').textContent = hours < 10 ? `0${hours}` : hours;
//     document.querySelector('.minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
//     document.querySelector('.seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;

//     if (timeRemaining < 0) {
//         clearInterval(countdownInterval);
//         document.querySelector('.countdown').innerHTML = "<h2>Audition Time!</h2>";
//     }
// }

// Update the countdown every 1 second (1000 milliseconds)
const countdownInterval = setInterval(updateCountdown, 1000);

// Navbar Color change on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add(".scrolled");
  } else {
    navbar.classList.remove(".scrolled");
  }
});
