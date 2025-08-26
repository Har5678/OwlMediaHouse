import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "These folks are not a marketing agency, they are family to me!",
    name: "Eeshan Jain",
  },
  {
    quote:
      "It's been more than 2 years working with them, they understand my business better than myself now",
    name: "Sushant Bhuchar",
  },
  {
    quote:
      "Best in class creatives and that too at such a fast speed. Clearly the best folks",
    name: "Michelle",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen py-16 px-6 md:py-32 md:px-12">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black text-center leading-snug">
        SEE WHAT INDUSTRY{" "}
        <span className="text-yellow-500">LEADERS</span> SAY ABOUT US
      </h2>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16">
        {testimonials.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY : 0}}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            key={index}
            className="bg-[#fdfbf3] p-8 sm:p-12 md:p-16 border-t-8 border-l-8 border-yellow-500 shadow-xl flex flex-col justify-between"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-gray-800 leading-relaxed"
            >
              {testimonial.quote}
            </motion.p>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 text-lg sm:text-xl font-bold text-gray-900"
            >
              {testimonial.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
