import { useEffect, useState } from "react";
import Header from "./compontes/1-header/Header";
import Hero from "./compontes/2-hero/hero";
import Main from "./compontes/3-main/Main";
import Contact from "./compontes/4-contact/Contact";
import Footer from "./compontes/5-footer/Footer";

function App() {
  const [showScrollBtn, setshowScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBtn(true);
      } else {
        setshowScrollBtn(false);
      }
    });
  });

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a
        style={{ opacity: showScrollBtn ? "1" : "0", transition: "1s" }}
        href="#up"
      >
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  );
}

export default App;
