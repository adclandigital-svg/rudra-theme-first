"use client";

import "./specifications.css";

const specs = [
  {
    title: "Structure",
    items: [
      {
        label: "Construction",
        value:
          "Earthquake resistant structure designed by experienced engineers and approved by IIT",
      },
    ],
  },

  {
    title: "Drawing / Dining",
    items: [
      { label: "Floor", value: "Vitrified Tiles" },
      { label: "Walls", value: "Oil Bound Distemper" },
      { label: "Ceiling", value: "Oil Bound Distemper" },
    ],
  },

  {
    title: "Master Bedroom",
    items: [
      { label: "Floor", value: "Laminated Wooden Flooring" },
      { label: "Walls", value: "Oil Bound Distemper" },
      { label: "Ceiling", value: "Oil Bound Distemper" },
    ],
  },

  {
    title: "Other Bedrooms",
    items: [
      { label: "Floor", value: "Vitrified Tiles" },
      { label: "Walls", value: "Oil Bound Distemper" },
      { label: "Ceiling", value: "Oil Bound Distemper" },
    ],
  },

  {
    title: "Kitchen",
    items: [
      { label: "Floor", value: "Vitrified Tiles" },
      {
        label: "Walls",
        value: "Designer Ceramic Tiles up to 2 ft above counter",
      },
      { label: "Ceiling", value: "Oil Bound Distemper" },
      {
        label: "Fixture & Fitting",
        value: "Granite Top with Stainless Steel Sink",
      },
    ],
  },

  {
    title: "Balconies",
    items: [
      { label: "Floor", value: "Vitrified / Ceramic Tiles" },
      { label: "Walls & Ceiling", value: "Weather Proof Paint" },
    ],
  },

  {
    title: "Toilets",
    items: [
      { label: "Floor", value: "Ceramic Tiles" },
      {
        label: "Walls",
        value: "Ceramic Tiles up to 7 ft height",
      },
      { label: "Ceiling", value: "Oil Bound Distemper" },
      {
        label: "Fixture & Fitting",
        value: "Marble Counter & Branded Fittings",
      },
    ],
  },

  {
    title: "Doors & Windows",
    items: [
      { label: "Internal Doors", value: "Flush Doors" },
      { label: "Entrance Door", value: "Flush Door" },
      {
        label: "External Doors & Windows",
        value: "UPVC / Aluminium",
      },
    ],
  },

  {
    title: "Electrical",
    items: [
      {
        label: "Wiring",
        value:
          "Copper wiring in concealed PVC conduits with light, power, TV & phone points",
      },
      {
        label: "Safety",
        value: "Protective MCBs with modular switches",
      },
    ],
  },

  {
    title: "Security & Safety",
    items: [
      {
        label: "Security",
        value: "Gated community with 24x7 security & CCTV in common areas",
      },
      {
        label: "Fire Safety",
        value: "Fire fighting system installed",
      },
    ],
  },
];

export default function Specifications() {
  return (
    <section className="specs-section">
      <h2 className="specs-title">Crafted Living Specifications</h2>

      <div className="specs-grid">
        {specs.map((section, i) => (
          <div className="spec-card" key={i}>
            <h3>{section.title}</h3>

            <div className="spec-items">
              {section.items.map((item, j) => (
                <div className="spec-row" key={j}>
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
