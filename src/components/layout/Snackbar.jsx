// components/Snackbar.js
"use client";

import Link from "next/link";
import "./snackbar.css";
import { MessageCircleMore } from "lucide-react";

export default function Snackbar() {
  return (
    <>
      <div className="snackbar">
        <div className="snackbar-links">
          <Link href="#">Aquacasa</Link>
          <Link href="#">Palace Heights</Link>
          <Link href="#">Pavo Real</Link>
          <Link href="#">Skytracks</Link>
          <Link href="#">Uno</Link>
        </div>
      </div>
      <div className="floating-actions">
       
        <a href="#" className="enquiry-rotate">
          Enquiry Now
        </a>
      </div>
    </>
  );
}
