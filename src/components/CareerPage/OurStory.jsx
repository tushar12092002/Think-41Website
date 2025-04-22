import React from "react";
import styles from "./OurStory.module.css";
import FoundationIcon from "../../assets/Career/foundation.svg";
import TeamImage from "../../assets/Career/team-photo.png";

const OurStory = () => (
  <section className={styles.ourStorySection} id="our-story">
    <div className={styles.headerRow}>
      {/* Foundation label */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", position: "relative", zIndex: 2 }}>
        <img src={FoundationIcon} alt="Foundation" style={{ width: 16, height: 16 }} />
        <span style={{ color: "#1F2937", fontWeight: 500, fontSize: 14 }}>Foundation</span>
      </div>
      {/* Gradient Heading */}
      <h2 className={styles.heading}>
        <span className={styles.gradientText}>Our story</span>
      </h2>
     
      {/* Two-column layout */}
      <div style={{ display: "flex", gap: "32px", width: "100%", position: "relative", zIndex: 2 }}>
        {/* Left: Text */}
        <div style={{ flex: 1, color: "#444", fontFamily: "Montserrat, sans-serif", fontSize: 16, lineHeight: "28px" }}>
          <div style={{ marginBottom: 24 }}>
            We’re not just building with AI. We’re building a company where AI and people grow together.
          </div>
          <div style={{ marginBottom: 24 }}>
            At Think41, AI isn’t just what we do—it’s how we think. From day one, we’ve co-engineered real-world GenAI systems with enterprises and built an AI-native culture that moves fast, solves real problems, and puts people first.
          </div>
          <div style={{ marginBottom: 24 }}>
            But this story isn’t just about technology. It’s about the people building it. From Boot41 grads to engineers from top institutes and founders who’ve scaled 600-member teams—we bring together talent, workflow, and innovation under one roof.
          </div>
          <div>
            Here, AI handles the repetitive so you can focus on what matters: solving problems, exploring new ideas, and shipping work you’re proud of. We take fun seriously, learning personally, and impact collectively. If you’re looking for a place where engineering excellence meets real ownership—this is it.
          </div>
        </div>
        {/* Right: Image */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={TeamImage}
            alt="Team"
            style={{
              width: "100%",
              maxWidth: "534px",
              height: "auto",
              borderRadius: "16px",
              objectFit: "cover",
              boxShadow: "0 2px 24px rgba(0,0,0,0.07)",
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default OurStory;