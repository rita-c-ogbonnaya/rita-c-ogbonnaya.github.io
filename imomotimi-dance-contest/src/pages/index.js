
import Header from '../components/header'
import Countdown from '../components/countdown'
import Note from '../components/note'
import Location from '../components/location'
import Contact from '../components/contact'
import Footer from '../components/footer'
import { createContext } from 'react'
import React from 'react'
import { useState } from 'react'


export const ThemeContext = createContext(null);
export default function Home() {
  const [theme, setTheme] = useState("light");
  const switchmode = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, switchmode }}>
      <div id={theme}>
        <link rel="icon" href="../public/assets/fontawesome/css/all.css" />
        <Header />
        <Countdown theme={ theme } />
        <Note />
        <Location theme={theme} />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}