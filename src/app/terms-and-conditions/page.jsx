import React from "react";
import "./privacy.css";

export default function Page() {
  return (
    <div className="privacy-wrapper">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>

        <p className="updated">
          <strong>Last Updated:</strong> May 2026
        </p>

        <p>
          Welcome to Rudra. We respect your privacy and are committed to protecting your
          personal information. This Privacy Policy explains how we collect, use, and
          safeguard your data when you use our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect basic details such as your name, email address, phone number,
          and any information you submit through forms on our website.
        </p>

        <h2>2. How We Use Information</h2>
        <ul>
          <li>To respond to your inquiries</li>
          <li>To provide our services</li>
          <li>To improve website experience</li>
          <li>To send updates (only if you opt-in)</li>
        </ul>

        <h2>3. Data Protection</h2>
        <p>
          We implement appropriate security measures to ensure your personal data is
          protected from unauthorized access or misuse.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Our website may use cookies to improve functionality and analyze traffic.
          You can disable cookies in your browser settings.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          We may use trusted third-party tools such as analytics services, which follow
          their own privacy policies.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You can request access, correction, or deletion of your personal data at any
          time by contacting us.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          Email: <strong>info@rudra.com</strong>
        </p>

        <div className="footer">
          © {new Date().getFullYear()} Rudra. All rights reserved.
        </div>
      </div>
    </div>
  );
}