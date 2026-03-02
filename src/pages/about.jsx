import React from "react";

const About = () => {
  return (
    <div className="about-page">

      {/* ===== HERO SECTION (IMAGE) ===== */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
            url(/bg2.png)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div>
          <h1>About CivicPulse</h1>
          <p>
            Empowering citizens to report, track, and resolve civic issues
            through transparency and technology.
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          CivicPulse is a community-driven platform that connects citizens with
          local authorities to report and resolve civic issues efficiently.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to make cities smarter and governance more transparent
          by enabling citizens to actively participate in problem reporting.
        </p>

        <h2>What We Do</h2>
        <ul>
          <li>Report civic issues easily</li>
          <li>Upload photos and locations</li>
          <li>Track issue status in real time</li>
          <li>Encourage community participation</li>
        </ul>
      </section>

      {/* ===== VISION / VALUES ===== */}
      <section className="about-box-section">
        <div className="about-box">
          <h3>Our Vision</h3>
          <p>
            To create responsive cities where citizens and authorities work
            together for better communities.
          </p>
        </div>

        <div className="about-box">
          <h3>Our Values</h3>
          <p>
            Transparency, accountability, inclusiveness, and technology for
            social good.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;