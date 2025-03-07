import "./hero.css";
import Lottie from "lottie-react";
import devAnmiation from "../../aniamtion/dev.json";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section id="home" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 5, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            alt="avatar"
            className="avatar "
          />
          <div className="icon-verified" />
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Frontend Developer, Turning Designs Into Pixel-Perfect Web
          Experiences.
        </motion.h1>
        <p className="sub-title">
          &apos;I&apos;m Ahmed, a Frontend Developer based in Baghdad. I
          specialize in building modern, interactive websites using React and
          Next.js — transforming ideas into seamless digital experiences.
          Let&apos;s build something amazing together.
        </p>

        <div className="all-icons flex">
          {/* <div className="icon-twitter"></div> */}
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right-ssection animation">
        {" "}
        <Lottie
          animationData={devAnmiation}
          className="contact-aniamtion"
          style={{ height: 355 }}
        />
      </div>
    </section>
  );
};

export default Hero;
