import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/HomeLandingPage.css";
import { motion } from "framer-motion";
import LandingPage1 from "../Components/Assets/LandingPage/LandingPage1.jpg";
import LandingPage3 from "../Components/Assets/LandingPage/LandingPage3.jpg";
import LandingPage4 from "../Components/Assets/LandingPage/LandingPage4.jpg";
import LandingPage2 from "../Components/Assets/LandingPage/LandingPage2.jpg";

export class HomeLandingPage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      disabled: false,
      fade: true,
      cssEase: "ease-in-out",
      //   autoplay: true,
      customPaging: (i) => <button className="dot">{i + 1}</button>,
    };

    return (
      <>
        <section className="sectionLandingPageImages">
          <Slider
            ref={(c) => (this.slider = c)}
            {...settings}
            className="sliderLandingPageImages"
          >
            <div className="divLandingPageImages" key={1}>
              <div>
                <motion.div
                  className="motionDiv"
                  initial={{ opacity: 1, y: "+50px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  exit={{ opacity: 1, y: "-50px" }}
                >
                  <h2 className="headingMotionDiv">
                    Design <br /> With Precision
                  </h2>
                  <motion.div
                    className="motionDivText"
                    initial={{ opacity: 0, y: "+50px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    exit={{ opacity: 1, y: "-50px" }}
                  >
                    <p>
                      "Engineering Solutions Tailored To You" <br />
                      From essential infrastructure to complex building systems,
                      our design are meticulouslycrafted to integrate seamlessly
                      and optimize performance.
                      {/* Discover how intelligent MEP
                      Engineering an power your projects to success. */}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
              <img
                className="landingPageImage"
                alt="Landing Page Images"
                src={LandingPage3}
              />
            </div>

            <div className="divLandingPageImages" key={2}>
              <div>
                <motion.div
                  className="motionDiv"
                  initial={{ opacity: 1, y: "+50px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  exit={{ opacity: 1, y: "-50px" }}
                >
                  <h2 className="headingMotionDiv">
                    Engineered <br /> To Endure
                  </h2>
                  <motion.div
                    className="motionDivText"
                    initial={{ opacity: 0, y: "+50px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    exit={{ opacity: 1, y: "-50px" }}
                  >
                    <p>
                      "Reliable Systems for Future Generation" <br />
                      Our team brings unparalled expertise, meticulous planning,
                      and robust execution to every project. We ensure your MEP
                      systems deliver optimal performance and stand the test of
                      time.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
              <img
                className="landingPageImage"
                alt="Landing Page Images"
                src={LandingPage1}
              />
            </div>

            <div className="divLandingPageImages" key={3}>
              <div>
                <motion.div
                  className="motionDiv"
                  initial={{ opacity: 1, y: "+50px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  exit={{ opacity: 1, y: "-50px" }}
                >
                  <h2 className="headingMotionDiv">
                    Seamless <br /> System Integration
                  </h2>
                  <motion.div
                    className="motionDivText"
                    initial={{ opacity: 0, y: "+50px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    exit={{ opacity: 1, y: "-50px" }}
                  >
                    <p>
                      "Your Vision, Powered from Concept to Completion" <br />
                      We manage the entire MEP project lifecycle, from initial
                      coordination to installation and commission.
                      {/* Our focus is
                      a seamless process, ensuring your systems work perfectly
                      so you don't have to worry. */}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
              <img
                className="landingPageImage"
                alt="Landing Page Images"
                src={LandingPage4}
              />
            </div>

            <div className="divLandingPageImages" key={4}>
              <div>
                <motion.div
                  className="motionDiv"
                  initial={{ opacity: 1, y: "+50px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  exit={{ opacity: 1, y: "-50px" }}
                >
                  <h2 className="headingMotionDiv">
                    Engineering <br /> Tomorrow
                  </h2>
                  <motion.div
                    className="motionDivText"
                    initial={{ opacity: 0, y: "+50px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    exit={{ opacity: 1, y: "-50px" }}
                  >
                    <p>
                      "Intelligent Systems For a Brighter Future" <br />
                      {/* We engineer cutting-edge MEP solutions that not only meet
                      today's demands but also anticipate tomorrow's challenges. */}
                      Our focus on smart, adaptable infrastructure eensures your
                      projects are future-ready, driving efficiency and
                      progress.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
              <img
                className="landingPageImage"
                alt="Landing Page Images"
                src={LandingPage2}
              />
            </div>
          </Slider>

          <div className="divLandingPageButtons">
            <button className="ButtonLeft" onClick={this.previous}>
              <span class="material-symbols-outlined">chevron_left</span>{" "}
            </button>

            <button className="ButtonRight" onClick={this.next}>
              <span class="material-symbols-outlined">chevron_right</span>{" "}
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default HomeLandingPage;
