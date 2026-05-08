import Image from "next/image";
import React from "react";
import "./team-alt.css";

const teamMembers = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Founder & CEO",
    image:
      "https://img.magnific.com/premium-photo/smiling-bearded-indian-business-man-investor-happy-ethnic-ceo-corporate-executive-professional-lawyer-successful-rich-banker-male-office-employee-salesman-isolated-gray-vertical-portrait_1254992-257334.jpg?w=2000",
  },
  {
    id: 2,
    name: "Neha Kapoor",
    role: "Sales Director",
    image:
      "https://img.magnific.com/premium-photo/smiling-bearded-indian-business-man-investor-happy-ethnic-ceo-corporate-executive-professional-lawyer-successful-rich-banker-male-office-employee-salesman-isolated-gray-vertical-portrait_1254992-257334.jpg?w=2000",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    role: "Senior Property Broker",
    image:
      "https://img.magnific.com/premium-photo/smiling-bearded-indian-business-man-investor-happy-ethnic-ceo-corporate-executive-professional-lawyer-successful-rich-banker-male-office-employee-salesman-isolated-gray-vertical-portrait_1254992-257334.jpg?w=2000",
  },
  {
    id: 4,
    name: "Priya Malhotra",
    role: "Marketing Head",
    image:
      "https://img.magnific.com/premium-photo/smiling-bearded-indian-business-man-investor-happy-ethnic-ceo-corporate-executive-professional-lawyer-successful-rich-banker-male-office-employee-salesman-isolated-gray-vertical-portrait_1254992-257334.jpg?w=2000",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Property Manager",
    image:
      "https://img.magnific.com/premium-photo/smiling-bearded-indian-business-man-investor-happy-ethnic-ceo-corporate-executive-professional-lawyer-successful-rich-banker-male-office-employee-salesman-isolated-gray-vertical-portrait_1254992-257334.jpg?w=2000",
  },
  {
    id: 6,
    name: "Ananya Reddy",
    role: "Client Relations Manager",
    image:
      "https://img.magnific.com/premium-photo/smiling-bearded-indian-business-man-investor-happy-ethnic-ceo-corporate-executive-professional-lawyer-successful-rich-banker-male-office-employee-salesman-isolated-gray-vertical-portrait_1254992-257334.jpg?w=2000",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-content">
          {/* Left Side - Text */}
          <div className="team-text">
            <p className="team-subtitle">MEET OUR TEAM</p>

            <h2 className="team-title">PASSIONATE PEOPLE BEHIND OUR SUCCESS</h2>

            <div className="team-divider"></div>

            <p className="team-description">
              Behind every successful project is a team driven by creativity,
              precision, and commitment. Our professionals bring years of
              expertise in real estate, architecture, planning, and customer
              relations to deliver exceptional experiences at every stage.
            </p>

            <div className="team-highlights">
              <div className="highlight-item">
                <h4>10+</h4>
                <span>Years Experience</span>
              </div>

              <div className="highlight-item">
                <h4>50+</h4>
                <span>Expert Members</span>
              </div>

              <div className="highlight-item">
                <h4>100%</h4>
                <span>Client Focused</span>
              </div>
            </div>
          </div>

          {/* Right Side - Team Grid */}
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    fill
                    className="team-image"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
