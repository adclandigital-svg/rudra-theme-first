"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "./notfound.css";

export default function NotFoundPage() {
  return (
    <div className="notfound-wrapper">

      {/* MAIN CONTENT */}
      <motion.div
        className="notfound-box"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* BIG NUMBER */}
        <motion.h1
          className="notfound-code"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>

        {/* TEXT */}
        <h2 className="notfound-title">Page Not Found</h2>

        <p className="notfound-subtitle">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* BUTTONS */}
        <div className="notfound-actions">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>

          <Link href="/contact" className="btn-secondary">
            Contact Support
          </Link>
        </div>
      </motion.div>

      {/* BACKGROUND SHAPES */}
      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>

    </div>
  );
}