import React from "react";
import { motion } from "framer-motion";
import "../Styles/HomeCoreValues.css";

const HomeCoreValues = () => {
  return (
    <>
      <section class="sectionSOV">
        <div class="divServicesHead-2">
          <h1 class="divServicesHead-3">Our Core Values</h1>
        </div>
        <br />
        <section class="sectionMission">
          <motion.div
            class="divMission"
            initial={{ opacity: 0, x: "-5rem" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            // viewport={{ once: true }}
          >
            <h2 class="missionName">Integrity</h2>
            <p class="missionTextCore">
              We behave in a manner that demonstrate trust, honesty, courage,
              consistency, and responsiiblity with a willingess to admit our
              mistakes.
            </p>
          </motion.div>
          <motion.div class="divMission-1">
            <h2 class="missionName-1">Quality</h2>
            <p class="headingCore">
              We consistently deliver quality installations that aligns with the
              strategic direction of the organization. We take pride in
              providing high value services that we stand behind, which ensures
              customer satisfaction, profitability and future of our employees
              and our growth.
            </p>
          </motion.div>
          <motion.div
            class="divMission-2"
            initial={{ opacity: 0, x: "+5rem" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            // viewport={{ once: true }}
          >
            <h2 class="missionName">Customer Satisfaction</h2>
            <p class="missionTextCore">
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
