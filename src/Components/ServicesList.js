import React from "react";
import "../Styles/ServicesList.css";
import { motion } from "framer-motion";
import AirConditioning from "../Components/Assets/ServicesImages/AirConditioning.jpg";
import Ventilation from "../Components/Assets/ServicesImages/Ventilation.jpg";
import PipeAndPlumbing from "../Components/Assets/ServicesImages/PipeAndPlumbing.jpg";
import FireProtection from "../Components/Assets/ServicesImages/FireProtection.jpg";
import ElectricalServices from "../Components/Assets/ServicesImages/ElectricalServices.jpg";
import ELVSystem from "../Components/Assets/ServicesImages/ELVSystem.jpeg";
import FuelSystem from "../Components/Assets/ServicesImages/FuelSystem.webp";

const ServicesList = () => {
  return (
    <>
      <section className="sectionServicesList">
        <div className="divServicesList">
          <motion.section
            className="sectionLists"
            initial={{ opacity: 0, y: "5rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="divServicesListImage">
              <img
                alt="HeroImg"
                src={AirConditioning}
                className="servicesListImage"
              />
            </div>
            <div className="divServicesListText">
              <h2 className="headingServicesListText">Air Conditioning</h2>
              <p>
                <p className="msText">
                  <ul className="msTextList">
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>
                        Chilled Water Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i> Variable Air Volume
                        Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Precision Close
                        Controlled Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Direct Expansion
                        Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Variable Refrigerant
                        Flow Systems
                      </span>
                    </li>
                  </ul>
                </p>
              </p>
            </div>
          </motion.section>
          <motion.section
            className="sectionLists"
            initial={{ opacity: 0, y: "5rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="divServicesListImage">
              <img
                alt="HeroImg"
                src={Ventilation}
                className="servicesListImage"
              />
            </div>
            <div className="divServicesListText">
              <h2 className="headingServicesListText">Ventilation</h2>
              <p>
                <p className="msText">
                  <ul className="msTextList">
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>
                        Smoke Extract Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i> General Ventilation
                        systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Pressurisation Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Car Park Ventilation
                        System
                      </span>
                    </li>
                  </ul>
                </p>
              </p>
            </div>
          </motion.section>
          <motion.section
            className="sectionLists"
            initial={{ opacity: 0, y: "5rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="divServicesListImage">
              <img
                alt="HeroImg"
                src={PipeAndPlumbing}
                className="servicesListImage"
              />
            </div>
            <div className="divServicesListText">
              <h2 className="headingServicesListText">
                Plumbing and Piped Services
              </h2>
              <p>
                <p className="msText">
                  <ul className="msTextList">
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>
                        Cold and Hot Water supply
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i> Sanitary Wares,
                        Kitchen Equipment and Accessories
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Soil and waste system
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Rainwater system
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>
                        Borehole and water treatment
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i> Sewage treatment
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Swimming pool and
                        Jacuzzi
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Water Fountains
                      </span>
                    </li>
                  </ul>
                </p>
              </p>
            </div>
          </motion.section>
          <motion.section
            className="sectionLists"
            initial={{ opacity: 0, y: "5rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="divServicesListImage">
              <img
                alt="HeroImg"
                src={FireProtection}
                className="servicesListImage"
              />
            </div>
            <div className="divServicesListText">
              <h2 className="headingServicesListText">
                Fire Detection and Protection
              </h2>
              <p>
                <p className="msText">
                  <ul className="msTextList">
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>
                        Fire Sprinklers
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i> Fire Hose Reels
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>FM200 Gas
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Fire Extinguishers
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>
                        Fire Hydrant
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Underground Bulk
                        Storage
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Tanks & Day Tanks
                      </span>
                    </li>
                  </ul>
                </p>
              </p>
            </div>
          </motion.section>
          <motion.section
            className="sectionLists"
            initial={{ opacity: 0, y: "5rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="divServicesListImage">
              <img
                alt="HeroImg"
                src={ElectricalServices}
                className="servicesListImage"
              />
            </div>
            <div className="divServicesListText">
              <h2 className="headingServicesListText">Electrical Services</h2>
              <p>
                <p className="msText">
                  <ul className="msTextList">
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>
                        415V Generator, Generator Synchronization and
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i> AMF Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Distribution Network –
                        Panels and DBs
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Rising Mains
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>
                        Conduiting, Trunking and Wiring
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Lighting Installations
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Wiring Accessories
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Underfloor Power
                        Distribution
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Power Poles
                        Distribution Networks
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Earthing and Lightning
                        Protection Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>UPS and AVR
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>External Poles and
                        Lighting Installations
                      </span>
                    </li>
                  </ul>
                </p>
              </p>
            </div>
          </motion.section>
          <motion.section
            className="sectionLists"
            initial={{ opacity: 0, y: "5rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="divServicesListImage">
              <img
                alt="HeroImg"
                src={ELVSystem}
                className="servicesListImage"
              />
            </div>
            <div className="divServicesListText">
              <h2 className="headingServicesListText">
                Extra Low Voltage Services
              </h2>
              <p>
                <p className="msText">
                  <ul className="msTextList">
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>
                        Data & PABX Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i> Building Management
                        Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Fire Detection and
                        Alarm Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Closed Circuit
                        Television Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>
                        Access Control Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Burglar Alarm
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Public Address Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>DSTV / CATV Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Video Door Entry
                        Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Conference Halls
                        Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Car Park Management
                        Systems
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Home Automations
                        Systems
                      </span>
                    </li>
                  </ul>
                </p>
              </p>
            </div>
          </motion.section>
          <motion.section
            className="sectionLists"
            initial={{ opacity: 0, y: "5rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="divServicesListImage">
              <img
                alt="HeroImg"
                src={FuelSystem}
                className="servicesListImage"
              />
            </div>
            <div className="divServicesListText">
              <h2 className="headingServicesListText">
                Fuel Storage and Piping System
              </h2>
              <p>
                <p className="msText">
                  <ul className="msTextList">
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>
                        Underground Bulk Storage
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i> Tanks & Day Tanks
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Fuel Piping
                      </span>
                    </li>
                    <li>
                      <span className="msSpan">
                        <i class="fa-solid fa-circle"></i>Fuel Dispensers
                      </span>
                    </li>
                  </ul>
                </p>
              </p>
            </div>
          </motion.section>
        </div>
      </section>
    </>
  );
};

export default ServicesList;
