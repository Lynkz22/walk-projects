import React from "react";
import "../Styles/HomeServices.css";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

const HomeServices = () => {
  return (
    <>
      <section className="sectionHomeServices">
        <div className="divHomeServicesText">
          <h2 className="headingHomeServices">Our Services</h2>
          <p className="textHomeSection">
            Every space has its own unique demands, and we're here to meet them
            with precision and care. Through a hands-on, tailored approach, we
            deliver essential services that keep your building operating
            smoothly, efficiently, and exactly as envisioned. As your trusted
            partners, we're committed to ensuring seamless functionality,
            reliability, and excellence—because your success starts with a space
            that works for you.
          </p>
        </div>

        <div className="divHomeServices">
          <div>
            <Link to="/Services">
              <div className="linkHomeServices">
                <div className="animatedText">
                  <span class="material-symbols-outlined serv">settings</span>
                  <br />
                  Mechanical
                </div>

                <div className="divText">
                  <p className="textHomeServices">
                    Trust out specialized MEP team for all your mechanical
                    needs. We provide expert design, installation,and
                    maintnanceof advanced HVAC and building management systems,
                    ensuring reliable comfort and energy efficiency for any
                    scale of project
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/Services">
              <div className="linkHomeServices">
                <div className="animatedText">
                  <span class="material-symbols-outlined serv">
                    power_settings_new
                  </span>
                  <br />
                  Electrical
                </div>

                <div className="divText">
                  <p className="textHomeServices">
                    Experience efficient and reliable power delivery within your
                    building with our electrical services. We meticulously plan,
                    install, and maintain all essential electrical
                    infrastructure, ensuring optimal performance and
                    adaptability for future growth.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/Services">
              <div className="linkHomeServices">
                <div className="animatedText">
                  <span class="material-symbols-outlined serv">plumbing</span>{" "}
                  <br />
                  Pipe Services
                </div>

                <div className="divText">
                  <p className="textHomeServices">
                    We offer comprehensive pipe services, covering the design,
                    installation, and maintenance of all essential plumbing,
                    drainage, and specialized fluid systems within your
                    building. Rely on our expertise for safe, efficient, and
                    compliant piping infrastructure.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/Services">
              <div className="linkHomeServices">
                <div className="animatedText">
                  <span class="material-symbols-outlined serv">
                    engineering
                  </span>
                  <br />
                  Project Advisory
                </div>

                <div className="divText">
                  <p className="textHomeServices">
                    Our project advisory services deliver the foresight you need
                    for successful MEP projects. We provide expert consultation
                    on planning, design, and technical challenges, ensuring
                    informed decision, optiized solutions, and seamless project
                    delivery
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
