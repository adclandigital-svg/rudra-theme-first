"use client";

import React, { useState } from "react";
import "./testi.css";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "UI Blox has revolutionized my design process. Its intuitive interface and robust features save me so much time, allowing me to focus on creativity rather than tedious tasks. It's like having an extra pair of hands!",
    name: "Jillie Bernard",
    role: "Founder & CEO",
    avatar: "https://i.pravatar.cc/150?u=jillie1",
  },
  {
    text: "UI Blox has revolutionized my design process. It's intuitive and saves me so much time!",
    name: "Jillie Bernard",
    role: "Founder & CEO",
    avatar: "https://i.pravatar.cc/150?u=jillie2",
  },
  {
    text: "Absolutely love UI Blox! The clean design and ease of use are unmatched. The intuitive interface simplifies complex tasks...",
    name: "Jillie Bernard",
    role: "Founder & CEO",
    avatar: "https://i.pravatar.cc/150?u=jillie3",
  },
  {
    text: "The best UI kit I've used for Framer. UI Blox is a game-changer for designers.",
    name: "David Miller",
    role: "Lead Software Engineer",
    avatar: "https://i.pravatar.cc/150?u=david1",
  },
  {
    text: "UI Blox has revolutionized my design process. Its intuitive interface and powerful features have drastically improved my workflow...",
    name: "David Miller",
    role: "Lead Software Engineer",
    avatar: "https://i.pravatar.cc/150?u=david2",
  },
  {
    text: "Absolutely love UI Blox! The clean design and ease of use are unmatched.",
    name: "Jillie Bernard",
    role: "Director of Sales",
    avatar: "https://i.pravatar.cc/150?u=jillie-sales",
  },
  {
    text: "UI Blox has revolutionized my design process. Its intuitive interface and robust features save me so much time, allowing me to focus on creativity rather than tedious tasks. It's like having an extra pair of hands!",
    name: "Jillie Bernard",
    role: "Founder & CEO",
    avatar: "https://i.pravatar.cc/150?u=jillie1",
  },
  {
    text: "UI Blox has revolutionized my design process. It's intuitive and saves me so much time!",
    name: "Jillie Bernard",
    role: "Founder & CEO",
    avatar: "https://i.pravatar.cc/150?u=jillie2",
  },
  {
    text: "Absolutely love UI Blox! The clean design and ease of use are unmatched. The intuitive interface simplifies complex tasks...",
    name: "Jillie Bernard",
    role: "Founder & CEO",
    avatar: "https://i.pravatar.cc/150?u=jillie3",
  },
  {
    text: "The best UI kit I've used for Framer. UI Blox is a game-changer for designers.",
    name: "David Miller",
    role: "Lead Software Engineer",
    avatar: "https://i.pravatar.cc/150?u=david1",
  },
  {
    text: "UI Blox has revolutionized my design process. Its intuitive interface and powerful features have drastically improved my workflow...",
    name: "David Miller",
    role: "Lead Software Engineer",
    avatar: "https://i.pravatar.cc/150?u=david2",
  },
  {
    text: "Absolutely love UI Blox! The clean design and ease of use are unmatched.",
    name: "Jillie Bernard",
    role: "Director of Sales",
    avatar: "https://i.pravatar.cc/150?u=jillie-sales",
  },
];

const faqData = [
  {
    q: "What is Framer?",
    a: "Framer is a modern website builder for designing and publishing interactive sites without heavy coding.",
  },
  {
    q: "Is it easy to learn?",
    a: "Yes, it is beginner-friendly with a visual editor and reusable components.",
  },
  {
    q: "Do I need to code?",
    a: "No, but basic React/CSS helps unlock advanced customization.",
  },
  {
    q: "Can I use it for production websites?",
    a: "Yes, many companies use Framer for real production websites.",
  },
];

export default function TestimonialsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="client-review-outer">
      <div className="container">
        {/* HEADER */}
        <motion.div
          className="header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="badge">Testimonials</div>
          <h1>What Our Customers Say</h1>
          <p className="subtitle">
            Hear from our incredible customers who are building at lightning
            speed.
          </p>
        </motion.div>

        {/* TESTIMONIALS */}
        <motion.div
          className="testimonials-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">{t.text}</p>

              <div className="author">
                <img src={t.avatar} alt={t.name} className="author-img" />
                <div>
                  <h4 style={{ margin: 0, fontWeight: 600 }}>{t.name}</h4>
                  <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ SECTION */}
        <div className="faq-section">
          {/* LEFT */}
          <motion.div
            className="faq-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="faq-badge">FAQ</div>

            <h2 className="faq-title">Frequently Asked Questions</h2>

            <p className="faq-subtitle">
              If you have any other questions, please email us.
            </p>

            <a href="/contact" className="faq-btn">
              Contact us →
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="faq-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">{item.q}</div>

                <span
                  className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
                >
                  +
                </span>

                {/* ANIMATED ANSWER */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
