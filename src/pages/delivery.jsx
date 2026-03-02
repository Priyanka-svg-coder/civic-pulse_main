import React from "react";

const Delivery = () => {
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
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
            Delivery
          </h1>
          <p style={{ maxWidth: "700px", lineHeight: "1.6" }}>
            Ensuring reliable, transparent, and efficient delivery of civic
            digital services.
          </p>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>How We Deliver</h2>
        <p style={{ lineHeight: "1.8", color: "#444" }}>
          CivicPulse focuses on building a dependable digital platform that
          supports smooth communication, data handling, and service execution.
          Our delivery approach emphasizes quality, speed, and accountability
          at every stage.
        </p>

        <div
  style={{
    marginTop: "40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  }}
>
  <div className="delivery-card">
    <h3>Reliable Infrastructure</h3>
    <p>
      We use stable and scalable systems to ensure uninterrupted access
      and consistent performance.
    </p>
  </div>

  <div className="delivery-card">
    <h3>Efficient Processing</h3>
    <p>
      Optimized workflows allow faster handling of data and smooth user
      experiences.
    </p>
  </div>

  <div className="delivery-card">
    <h3>Transparent Operations</h3>
    <p>
      Clear visibility into processes helps maintain trust and
      accountability.
    </p>
  </div>

  <div className="delivery-card">
    <h3>Continuous Improvement</h3>
    <p>
      We evolve our platform continuously based on feedback and civic
      needs.
    </p>
  </div>
</div>
      </section>

    </div>
  );
};

const cardStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
  color: "#444",
  lineHeight: "1.7",
};

export default Delivery;