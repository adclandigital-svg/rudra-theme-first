"use client";

import { useState } from "react";
import "./payment.css";

export default function PaymentPlan() {
  const [active, setActive] = useState(0);

  const paymentPlan = [
    { stage: "On Application for Booking", value: 10 },
    { stage: "Within 60 Days of Booking*", value: 10 },
    { stage: "On Start of Excavation", value: 10 },
    { stage: "On Start of Raft Casting", value: 10 },
    { stage: "On Start of 2nd Floor Slab", value: 10 },
    { stage: "On Start of 5th Floor Slab", value: 10 },
  ];
  const paymentPlan2 = [
    { stage: "On Start of 8th Floor Slab", value: 10 },
    { stage: "On Start of 15th Floor Slab", value: 10 },
    { stage: "On Start of Top Floor Slab", value: 10 },
    { stage: "On Starting of External Plaster", value: 5 },
    { stage: "On Notice for Possession", value: 5 },
  ];
  const terms = [
    "Prices are subject to change without prior notice.",
    "Area refers to Super Built-up Area including common areas.",
    "Plans, layouts, and specifications may change as per authority/architect.",
    "Booking is subject to Builder Buyer Agreement terms.",
    "Stamp duty, registration, and government charges are applicable.",
    "Taxes will be charged as per prevailing rates.",
    "Cheque bounce must be cleared within 3 working days, else booking may be cancelled.",
    "All sales/cancellations are governed by application form & agreement.",
    "Disputes fall under Arbitration Act, 1996 (Delhi jurisdiction).",
    "Payments must be made to official project accounts only.",
  ];

  return (
    <section className="pay-split">
      <h2 className="pay-title">Construction Linked Payment Plan</h2>

      <div className="pay-grid">
        {/* LEFT SIDE */}
        <div className="pay-left">
          {paymentPlan.map((item, i) => (
            <div key={i} className="step" onClick={() => setActive(i)}>
              <div className="step-left">
                <span className="step-number">{i + 1}</span>
                <p>{item.stage}</p>
              </div>
              <span className="percent">{item.value}%</span>
            </div>
          ))}
        </div>

        <div className="pay-left">
          {paymentPlan2.map((item, i) => (
            <div key={i} className="step" onClick={() => setActive(i)}>
              <div className="step-left">
                <span className="step-number">
                  {paymentPlan.length + i + 1}
                </span>
                <p>{item.stage}</p>
              </div>
              <span className="percent">{item.value}%</span>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="pay-right">
          <h3>Terms & Conditions</h3>
          <div className="terms-scroll">
            {terms.map((t, i) => (
              <p key={i}> {t}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
