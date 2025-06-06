import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HomeGetInTouch.css";
import { motion } from "framer-motion";

const HomeGetInTouch = () => {
  return (
    <>
      <section className="sectionGetInTouch">
        <div className="divGetInTouch">
          <motion.div
            className="divGitPhrase"
            initial={{ opacity: 0, x: "5rem" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <p className="gitPhraseOne">Let's Talk </p>
            <p className="gitPhrase">
              {/* <span className="gitPhraseFirst"> */}
              ABOUT YOUR
              {/* </span>  */}
              <br />
              <span className="gitPhraseSecond">NEXT PROJECT</span>
            </p>
          </motion.div>
          <motion.div
            className="divGITButton"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
          >
            <Link to="/Contact">
              <button className="buttonGITChoose">
                <p className="textGITButton">Get In Touch</p>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomeGetInTouch;
