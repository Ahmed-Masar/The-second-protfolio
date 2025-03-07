import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  function handleCloseMeunUl() {
    setShowModel(false);
  }

  function handleOpenMeunUl() {
    setShowModel(true);
  }
  return (
    <header className="flex">
      <button
        className="menu icon-menu flex"
        onClick={() => {
          handleOpenMeunUl();
        }}
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="mode flex"
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          setTheme(localStorage.getItem("currentMode"));
        }}
      >
        {theme === "dark" ? (
          <span className="icon-moon-o" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>
      {showModel && (
        <div className="fixed ">
          <ul className="modal">
            <li>
              <button
                onClick={() => {
                  handleCloseMeunUl();
                }}
                className="icon-close"
              />
            </li>
            <li>
              <a
                href="#home"
                onClick={() => {
                  handleCloseMeunUl();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  handleCloseMeunUl();
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  handleCloseMeunUl();
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
