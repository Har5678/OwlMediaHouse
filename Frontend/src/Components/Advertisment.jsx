import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Advertisement = () => {
  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center px-8 pt-8">
      {/* Heading aligned to the center with white text */}
      <motion.h1
        initial={{ opacity: 0, translateY: "90%" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeOut",
        }}
        className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase leading-[1.3]"
      >
        TAILORED SOLUTIONS <br /> FOR EVERY BUSINESS <br /> BIG OR SMALL
      </motion.h1>

      {/* Cards Section centered */}
      <div className="w-full max-w-screen-xl mt-6 md:mt-12 bg-black p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center ">
        {/* Card 1 */}
        <div className="bg-white p-9 shadow-md rounded-4xl w-full sm:w-72 md:w-80 lg:w-96 h-72 flex flex-col justify-between space-y-6">
          <img
            src={assets.Icon1}
            alt="Card 1"
            className="w-28 h-28 object-cover mb-4 rounded-md "
          />
          <motion.h2
            initial={{ opacity: 0, translateY: "90%" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeOut",
            }}
            className="text-start text-xl md:text-2xl font-semibold">Social Media <br /> Management</motion.h2>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-9 shadow-md rounded-4xl w-full sm:w-72 md:w-80 lg:w-96 h-72 flex flex-col justify-between space-y-6">
          <img
            src={assets.Icon2}
            alt="Card 2"
            className="w-28 h-28 object-cover mb-4 rounded-md "
          />
          <motion.h2
            initial={{ opacity: 0, translateY: "90%" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeOut",
            }}
            className="text-start text-xl md:text-2xl font-semibold">Ads and <br /> Campaign
          </motion.h2>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-9 shadow-md rounded-4xl w-full sm:w-72 md:w-80 lg:w-96 h-72 flex flex-col justify-between space-y-6">
          <img
            src={assets.Icon3}
            alt="Card 3"
            className="w-28 h-28 object-cover mb-4 rounded-md "
          />
          <motion.h2
            initial={{ opacity: 0, translateY: "90%" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeOut",
            }}
            className="text-start text-xl md:text-2xl font-semibold">Search Engine <br /> Optimization</motion.h2>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-9 shadow-md rounded-4xl w-full sm:w-72 md:w-80 lg:w-96 h-72 flex flex-col justify-between space-y-6">
          <img
            src={assets.Icon4}
            alt="Card 4"
            className="w-28 h-28 object-cover mb-4 rounded-md "
          />
          <motion.h2
            initial={{ opacity: 0, translateY: "90%" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeOut",
            }}
            className="text-start text-xl md:text-2xl font-semibold">Brand Identity
          </motion.h2>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-9 shadow-md rounded-4xl w-full sm:w-72 md:w-80 lg:w-96 h-72 flex flex-col justify-between space-y-6">
          <img
            src={assets.Icon5}
            alt="Card 5"
            className="w-28 h-28 object-cover mb-4 rounded-md "
          />
          <motion.h2
            initial={{ opacity: 0, translateY: "90%" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeOut",
            }}
            className="text-start text-xl md:text-2xl font-semibold">UI and UX Design
          </motion.h2>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-9 shadow-md rounded-4xl w-full sm:w-72 md:w-80 lg:w-96 h-72 flex flex-col justify-between space-y-6">
          <img
            src={assets.Icon6}
            alt="Card 6"
            className="w-28 h-28 object-cover mb-4 rounded-md "
          />
          <motion.h2
            initial={{ opacity: 0, translateY: "90%" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeOut",
            }}
            className="text-start text-xl md:text-2xl font-semibold">Web Development
          </motion.h2>
        </div>
      </div>
      <motion.button
        initial={{ opacity: 0, translateY: "100%" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "easeOut",
        }}
        className="mt-8 px-8 py-4 bg-yellow-400 text-white font-bold text-lg rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
      >
        View All Services
      </motion.button>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, translateX: "-100%" }} // Initial state
        whileInView={{ opacity: 1, translateX: "0" }} // Animate to opacity 1 and translateX to 0
        transition={{
          delay: 1,
          duration: 1, // Adjusted duration to 2 seconds
          ease: "easeOut", // Added easing to make it smoother
        }}
        viewport={{ once: true }} // Animation runs only once when it comes into view
        className="mt-12 text-center text-white text-2xl sm:text-4xl lg:text-8xl font-bold uppercase">
        CUSTOMIZED WORKFLOW
      </motion.h2>
      <div className="relative bg-black py-10">
        {/* Full Page Container */}
        <div className="relative flex flex-col items-center w-full">

          {/* Vertical Line - Full Height */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-white h-full rotate-[-32deg]">
            <div className="absolute w-4 h-4 bg-orange-500 rounded-full left-1/2 top-[0%] -translate-x-1/2"></div>
            <div className="absolute w-4 h-4 bg-orange-500 rounded-full left-1/2 top-[35%] -translate-x-1/2"></div>
            <div className="absolute w-4 h-4 bg-orange-500 rounded-full left-1/2 top-[65%] -translate-x-1/2"></div>
            <div className="absolute w-4 h-4 bg-orange-500 rounded-full left-1/2 top-[100%] -translate-x-1/2"></div>
          </div>

          {/* First Section - Concept */}
          <div className="bg-[#ffc90526] w-full flex flex-col lg:flex-row items-center justify-between p-6 md:p-16 relative gap-x-60">
            {/* Heading (Above on Mobile) */}
            <div className="w-[800px] md:w-1/2 text-center md:text-left md:pr-10">
              <motion.h3
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-white text-2xl md:text-5xl font-bold mb-4 lg:mb-0 text-center">
                Concept
              </motion.h3>
            </div>

            {/* Paragraph (Below on Mobile) */}
            <motion.div
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: "0" }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-[39%] sm:w-[70%] md:w-full lg:w-1/2 text-white text-md lg:text-2xl leading-relaxed text-center md:text-left md:pl-10">
              We believe that a strong marketing concept is the foundation of any
              successful campaign. Whether it's a new product launch, a brand
              awareness campaign, or a lead generation effort.
            </motion.div>
          </div>

          {/* Second Section - Budget */}
          <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-between py-12 px-6 relative gap-x-60">
            {/* Heading (Above on Mobile) */}
            <div className="w-full lg:w-1/2 flex justify-center items-center text-center">
              <motion.h2
                initial={{ opacity: 0, translateX: "100%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-white text-4xl lg:text-6xl font-bold mb-4 lg:mb-0">
                Budget
              </motion.h2>
            </div>

            {/* Paragraph (Below on Mobile) */}
            <div className="w-[39%] sm:w-[70%] md:w-full lg:w-1/2 text-center md:text-left">
              <motion.p
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="   text-white text-lg lg:text-2xl leading-relaxed px-4">
                The budget is an essential part of any successful campaign. It helps in determining the financial resources required for the execution of the strategy, ensuring that the goals are met within a controlled budget framework.
              </motion.p>
            </div>
          </div>

          {/* Third Section - Concept */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between p-10 md:p-10 relative gap-x-60">
            {/* Heading (Above on Mobile) */}
            <div className="w-full lg:w-1/2 text-center md:text-left md:pr-10">
              <motion.h3
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-white text-2xl lg:text-5xl font-bold mb-4 lg:mb-0 text-center">
                Development
              </motion.h3>
            </div>

            {/* Paragraph (Below on Mobile) */}
            <motion.div
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: "0" }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-[39%] sm:w-[70%] md:w-full lg:w-1/2 text-white text-md lg:text-2xl leading-relaxed text-center md:text-left md:pl-10">
              We intend to work with you every step of the way to guarantee that your campaign functions effectively. We will handle all areas of your brand's social media development, from writing captivating prose to creating eye-catching images.
            </motion.div>
          </div>

          {/* Fourth Section - Budget */}
          <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-between py-12 px-6 relative gap-x-60">
            {/* Heading (Above on Mobile) */}
            <div className="w-full lg:w-1/2 flex justify-center items-center text-center">
              <motion.h2
                initial={{ opacity: 0, translateX: "100%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-white text-4xl lg:text-6xl font-bold mb-4 lg:mb-0">
                Result
              </motion.h2>
            </div>

            {/* Paragraph (Below on Mobile) */}
            <motion.div className="w-[39%] sm:w-[70%] md:w-full lg:w-1/2 text-white text-md lg:text-2xl leading-relaxed text-center md:text-left md:pl-10"
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}>
                Helping you accomplish your company goals—whether they be raising sales, creating leads, raising visibility, or something else entirely—is our ultimate goal. Our goal is to provide quantifiable, observable outcomes that you can examine and evaluate.
            </motion.div>
          </div>
        </div>
      </div>


    </div>

  );
};

export default Advertisement;
