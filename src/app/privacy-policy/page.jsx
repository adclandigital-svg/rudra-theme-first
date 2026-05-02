import React from "react";
import "./privacy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-wrapper">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="updated">
          <strong>Last Updated:</strong> May 2026
        </p>

        <p>
          Welcome to Rudra. We respect your privacy and are committed to protecting
          your personal information. This Privacy Policy explains how we collect,
          use, and safeguard your data.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect information such as your name, email address, phone number,
          and any details submitted through contact forms.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To respond to inquiries</li>
          <li>To improve our services</li>
          <li>To share updates (only with consent)</li>
        </ul>

        <h2>3. Data Protection</h2>
        <p>
          We use appropriate security measures to protect your data from unauthorized
          access or misuse.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Our website may use cookies to improve user experience and analyze traffic.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          We may use trusted third-party tools (like analytics) that follow their own
          privacy policies.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You can request access, correction, or deletion of your personal data at any time.
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