"use client";

import "./specifications.css";

const specs = [
  {
    title: "Living Room / Dining / Lobby / Family Room",
    items: [
      { label: "Walls", value: "Oil Bound Distemper" },
      { label: "Floor", value: "Vitrified Tiles" },
      { label: "Ceiling", value: "POP Cornice with Oil Bound Distemper" },
      {
        label: "Doors",
        value:
          "Internal: Flush Door Shutters / Skin Moulded Doors | Main Entrance: Polished Veneered / Laminated Flush Door",
      },
      {
        label: "Windows",
        value: "UPVC / Aluminium Powder Coated",
      },
      { label: "Switches", value: "Modular Switches" },
    ],
  },

  {
    title: "Master Bedroom",
    items: [
      { label: "Walls", value: "Oil Bound Distemper" },
      { label: "Floor", value: "Laminated Wooden Flooring" },
      { label: "Ceiling", value: "Oil Bound Distemper" },
      {
        label: "Doors",
        value: "Flush Door Shutters / Skin Moulded Doors",
      },
      {
        label: "Windows",
        value: "UPVC / Aluminium Powder Coated",
      },
      { label: "Switches", value: "Modular Switches" },
    ],
  },

  {
    title: "Other Bedrooms",
    items: [
      { label: "Walls", value: "Oil Bound Distemper" },
      { label: "Floor", value: "Vitrified Tiles" },
      { label: "Ceiling", value: "Oil Bound Distemper" },
      {
        label: "Doors",
        value: "Flush Door Shutters / Skin Moulded Doors",
      },
      {
        label: "Windows",
        value: "UPVC / Aluminium Powder Coated",
      },
      { label: "Switches", value: "Modular Switches" },
    ],
  },

  {
    title: "Kitchen",
    items: [
      {
        label: "Walls",
        value: "Designer Ceramic Tiles up to 2 ft above counter",
      },
      { label: "Floor", value: "Vitrified Tiles" },
      { label: "Ceiling", value: "Oil Bound Distemper" },
      {
        label: "Doors",
        value: "Flush Door Shutters / Skin Moulded Doors",
      },
      {
        label: "Windows",
        value: "UPVC / Aluminium Powder Coated",
      },
      {
        label: "Others",
        value: "Granite Top with Stainless Steel Sink",
      },
      { label: "Switches", value: "Modular Switches" },
    ],
  },

  {
    title: "Balconies / Terraces",
    items: [
      { label: "Walls", value: "Weather Proof Paint" },
      { label: "Floor", value: "Anti-Skid Tiles" },
      { label: "Ceiling", value: "Weather Proof Paint" },
      {
        label: "Windows",
        value: "UPVC / Aluminium Powder Coated",
      },
      { label: "Switches", value: "Modular Switches" },
    ],
  },

  {
    title: "Master Toilet",
    items: [
      { label: "Walls", value: "Ceramic Tiles up to 7 ft height" },
      { label: "Floor", value: "Anti-Skid Ceramic Tiles" },
      { label: "Ceiling", value: "Oil Bound Distemper" },
      {
        label: "Windows",
        value: "UPVC / Aluminium Powder Coated",
      },
      {
        label: "Others",
        value:
          "Shower Cubicle, Branded China Ware & CP Fittings, Marble / Granite Counter",
      },
      { label: "Switches", value: "Modular Switches" },
    ],
  },

  {
    title: "Other Toilets",
    items: [
      { label: "Walls", value: "Ceramic Tiles up to 7 ft height" },
      { label: "Floor", value: "Anti-Skid Vitrified Tiles" },
      { label: "Ceiling", value: "Oil Bound Distemper" },
      {
        label: "Windows",
        value: "UPVC / Aluminium Powder Coated",
      },
      {
        label: "Others",
        value: "Branded China Ware & CP Fittings",
      },
      { label: "Switches", value: "Modular Switches" },
    ],
  },

  {
    title: "Servant / Utility Room",
    items: [
      { label: "Walls", value: "Oil Bound Distemper / Ceramic Tiles" },
      { label: "Floor", value: "Anti-Skid Ceramic Tiles" },
      { label: "Ceiling", value: "Oil Bound Distemper" },
      {
        label: "Doors",
        value: "Flush Door Shutters / Skin Moulded Doors",
      },
      {
        label: "Windows",
        value: "Flush Door Shutters / Skin Moulded Doors",
      },
      {
        label: "Others",
        value: "Indian Type WC with CP Fittings",
      },
      { label: "Switches", value: "Modular Switches" },
    ],
  },

  {
    title: "Facilities",
    items: [
      {
        label: "Recreation",
        value:
          "Commercial Complex, Car Wash, Health Club Facility, Dance & Aerobics Studio",
      },
      {
        label: "Sports",
        value:
          "Jogging Track, Tennis Practice Court, Swimming Pool with Baby Splash, Shower & Changing Areas",
      },
      {
        label: "Club",
        value:
          "Hi-Tech Play Station Zone, Lounge, Billiards/Pool Room, Multi-Purpose Hall, Rooftop Restaurant & Library",
      },
      {
        label: "Kids Area",
        value: "Creche, Tot-Lots, Seesaws, Slides, Sand Pit & Party Area",
      },
      {
        label: "Utilities",
        value: "Centralized Water Treatment Plant for Potable Water",
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
