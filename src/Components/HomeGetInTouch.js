import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HomeGetInTouch.css";

const HomeGetInTouch = () => {
  return (
    <>
      <section className="sectionGetInTouch">
        <div className="divGetInTouch">
          <div className="divGitPhrase">
            <p className="gitPhraseOne">Let's Talk </p>
            <p className="gitPhrase">
              <span className="gitPhraseFirst">ABOUT YOUR</span> <br />
              <span className="gitPhraseSecond">NEXT PROJECT</span>
            </p>
          </div>
          <div className="divGITButton">
            <Link to="/Contact">
              <button className="buttonGITChoose">
                <p className="textGITButton">Get In Touch</p>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeGetInTouch;
