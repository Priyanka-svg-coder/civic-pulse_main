import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>

      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
            url(/bg2.png)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
          backgroundAttachment: "fixed",
          minHeight: "45vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2.8rem", marginBottom: "10px" }}>
            Privacy Policy
          </h1>
          <p style={{ maxWidth: "700px", lineHeight: "1.6" }}>
            Your privacy matters to us. This policy explains how CivicPulse
            collects, uses, and protects your information.
          </p>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 20px",
          lineHeight: "1.8",
          color: "#444",
        }}
      >
        <h2>Introduction</h2>
        <p>
          CivicPulse is committed to protecting the privacy of its users. This
          Privacy Policy outlines how we collect, use, store, and safeguard your
          personal information when you use our platform.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Basic user details such as name and email address</li>
          <li>Location and issue-related information submitted by users</li>
          <li>Images or media uploaded while reporting civic issues</li>
          <li>Usage data for improving platform performance</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          The information collected is used solely to operate, maintain, and
          improve CivicPulse. This includes:
        </p>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Processing and displaying reported civic issues</li>
          <li>Improving user experience and platform functionality</li>
          <li>Ensuring transparency and accountability</li>
          <li>Communicating important updates related to the platform</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your data from unauthorized access, misuse, or disclosure.
          However, no digital platform can guarantee absolute security.
        </p>

        <h2>Data Sharing</h2>
        <p>
          CivicPulse does not sell or rent user data. Information may only be
          shared with relevant authorities or partners when necessary for civic
          issue resolution or when required by law.
        </p>

        <h2>User Responsibility</h2>
        <p>
          Users are advised not to share sensitive personal information while
          submitting issues. CivicPulse is not responsible for personal data
          voluntarily disclosed by users in public reports.
        </p>

        <h2>Policy Updates</h2>
        <p>
          This Privacy Policy may be updated periodically to reflect changes in
          technology, legal requirements, or platform features. Continued use
          of CivicPulse signifies acceptance of the updated policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy,
          please contact us through the official CivicPulse communication
          channels.
        </p>
      </section>

    </div>
  );
};

export default PrivacyPolicy;