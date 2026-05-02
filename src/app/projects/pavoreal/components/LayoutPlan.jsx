"use client";

import { useState } from "react";
import "./layoutplan.css";

export default function LayoutPlan() {
  const [open, setOpen] = useState(false);

  return (
    <section className="layout-section">

      {/* HEADING */}
      <div className="layout-head">
        <h2>Master Layout Plan</h2>
        <p>
          Explore the complete blueprint of Aquacasa — thoughtfully designed
          spaces, green landscapes, and premium infrastructure.
        </p>
      </div>

      {/* IMAGE */}
      <div className="layout-image-wrap" onClick={() => setOpen(true)}>
        <img
          src="/projects/palace-heights/layout-big.jpg"
          alt="Aquacasa Layout Plan"
        />
      </div>

      {/* POPUP MODAL */}
      {open && (
        <div className="layout-modal" onClick={() => setOpen(false)}>
          <span className="close-btn">&times;</span>
          <img
            src="/projects/palace-heights/layout-big.jpg"
            alt="Full Layout"
            className="modal-img"
          />
        </div>
      )}
    </section>
  );
}