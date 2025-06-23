import React from "react";
import { motion } from "framer-motion";
import "../Styles/HomeCoreValues.css";

const HomeCoreValues = () => {
  return (
    <>
      <section className="sectionSOV">
        <div className="divServicesHead-2">
          <h1 className="divServicesHead-3">Our Core Values</h1>
        </div>
        <br />
        <section className="sectionMission">
          <motion.div
            className="divMission"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <h2 className="missionName">Integrity</h2>
            <p className="missionTextCore">
              We behave in a manner that demonstrate trust, honesty, courage,
              consistency, and responsiiblity with a willingess to admit our
              mistakes.
            </p>
          </motion.div>
          <motion.div className="divMission-1">
            <h2 className="missionName-1">Quality</h2>
            <p className="headingCore">
              We consistently deliver quality installations that aligns with the
              strategic direction of the organization. We take pride in
              providing high value services that we stand behind, which ensures
              customer satisfaction, profitability and future of our employees
              and our growth.
            </p>
          </motion.div>
          <motion.div
            className="divMission"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <h2 className="missionName">Customer Satisfaction</h2>
            <p className="missionTextCore">
              We are a group of highly trained personnel with professional
              qualifications from several enginenering bodies, we are solely
              driven by our core values, which brings out the best in our job
              delivery.
            </p>
          </motion.div>
        </section>
      </section>
    </>
  );
};

export default HomeCoreValues;
