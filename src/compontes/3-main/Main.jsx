import { useEffect, useState } from "react";
import "./main.css";
import { myProjectes } from "./myProjectes";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [active, setActive] = useState("all");
  const [numberOfList, setNumberOfList] = useState("");
  const [arr, setArr] = useState(myProjectes);

  const handleClick = (type) => {
    setActive(type);

    const newArr = myProjectes.filter((item) => {
      const zzz = item.category.find((myItem) => {
        if (type === "all") {
          handleFlterList("1");
        } else {
          return myItem === type;
        }
      });
      return zzz;
    });
    setArr(newArr);
  };

  function handleFlterList(number) {
    setNumberOfList(number);

    const newArr = myProjectes.filter((item) => {
      const zzz = item.listNumber;
      return zzz == number;
    });
    setArr(newArr);
  }

  useEffect(() => {
    handleFlterList("1");
  }, []);

  return (
    <main className="flex" id="projects">
      <section className="left-section flex">
        <button
          onClick={() => {
            setActive("all");
            handleClick("all");
            handleFlterList("1");
          }}
          className={active == "all" ? "active" : ""}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={active == "css" ? "active" : ""}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("bootstrap");
          }}
          className={active == "bootstrap" ? "active" : ""}
        >
          Bootstrep
        </button>

        <button
          onClick={() => {
            handleClick("java");
          }}
          className={active == "java" ? "active" : ""}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={active == "react" ? "active" : ""}
        >
          React
        </button>

        <button
          onClick={() => {
            handleClick("next");
          }}
          className={active == "next" ? "active" : ""}
        >
          Next
        </button>
      </section>

      <section className="all__of__right">
        {active === "all" ? (
          <ul className="right__ul">
            <li
              className={numberOfList === "1" ? "active" : ""}
              onClick={() => {
                handleFlterList("1");
              }}
            >
              1
            </li>
            <li
              className={numberOfList === "2" ? "active" : ""}
              onClick={() => {
                handleFlterList("2");
              }}
            >
              2
            </li>
            <li
              className={numberOfList === "3" ? "active" : ""}
              onClick={() => {
                handleFlterList("3");
              }}
            >
              3
            </li>
          </ul>
        ) : (
          ""
        )}

        <div className="right-section flex">
          <AnimatePresence>
            {arr.map((item) => {
              return (
                <motion.article
                  key={item.imgPath}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ type: "spring", damping: 5, stiffness: 50 }}
                  className="card"
                >
                  <img width={266} src={item.imgPath} alt="none" />
                  <div style={{ width: "266px" }} className="box">
                    <h1 className="title">{item.projectTitle}</h1>
                    <p className="sub-title">{item.projectBody}</p>
                    <div className="flex icons">
                      {/* <div className=""> */}
                      {/* <div className="icon-link" /> */}
                      <a
                        className="icon-github"
                        target="_blank"
                        href={item.githubURL}
                      />
                      {/* </div> */}
                      <a
                        href={item.websiteURL}
                        target="_blank"
                        className="link flex"
                      >
                        Go To Webesite{" "}
                        <span
                          style={{ alignSelf: "end" }}
                          className="icon-arrow_forward"
                        />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Main;
