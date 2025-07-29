import React, { useEffect, useState } from "react";
import "../styles/TracksSection.css";

const tracks = [
  {
    id: 1,
    title: "Engineering Track",
    subtitle: "CHOOSE YOUR PATH",
    description:
      "Master AI-powered development for Nigerian fintech APIs, payments, and blockchain systems",
    duration: "12 Weeks",
    details: [
      "API Integrations",
      "AI Assistant Coding",
      "Production Deployment",
    ],
    projects: "6 Real Projects",
    bgClass: "engineering-bg",
    imgAlt: "Engineering Image",
    imgSrc: require("../assets/Engineering.jpg"),
  },
  {
    id: 2,
    title: "Product & Design Track",
    subtitle: "CHOOSE YOUR PATH",
    description:
      "Design fintech products with AI research, compliance-first UX, and data-driven strategy",
    duration: "10 Weeks",
    details: ["AI User Research", "CBN Compliance", "Fintech UX Research"],
    projects: "10 Case Studies",
    bgClass: "product-bg",
    imgAlt: "Product Image",
    imgSrc: require("../assets/product.jpg"),
  },
  {
    id: 3,
    title: "Career & AI Productivity",
    subtitle: "CHOOSE YOUR PATH",
    description:
      "Accelerate your fintech career with 10x AI productivity and executive presence",
    duration: "8 Weeks",
    details: ["AI Productivity", "Industry Network", "Leadership Skills"],
    projects: "Portfolio + Networking",
    bgClass: "career-bg",
    imgAlt: "Career Image",
    imgSrc: require("../assets/career.jpg"),
  },
];

const TracksSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentTrack = tracks[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tracks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`tracks-section ${currentTrack.bgClass}`}>
      <div className="track-header">
        <div className="track-header-row">
          <p className="subtitle">{currentTrack.subtitle}</p>
          <div className="section-tabs">
            {tracks.map((track, idx) => (
              <span
                key={track.id}
                className={`section-tab${activeIndex === idx ? " active" : ""}`}
                onClick={() => setActiveIndex(idx)}
              >
                {`0${idx + 1}`} {activeIndex === idx && track.title}
              </span>
            ))}
          </div>
        </div>
        <div className="tracks-content">
          <div className="text-section">
            <h2 className="track-title">{currentTrack.title}</h2>
            <p className="track-description">{currentTrack.description}</p>
            <ul className="track-info">
              <li
                style={{
                  display: "flex",
                  gap: "2rem",
                  alignItems: "center",
                  marginBottom: "2rem",
                }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={require(`../assets/${
                      currentTrack.bgClass === "product-bg"
                        ? "Calendar-white.png"
                        : "Calendar.png"
                    }`)}
                    alt="calendar"
                    style={{ width: 20, height: 20, marginRight: "0.5rem" }}
                  />
                  <strong>{currentTrack.duration}</strong>
                </span>
                {currentTrack.projects && (
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={require(`../assets/${
                        currentTrack.bgClass === "product-bg"
                          ? "Group-white.png"
                          : "Group.png"
                      }`)}
                      alt="group"
                      style={{ width: 15, height: 15, marginRight: "0.5rem" }}
                    />
                    <strong>{currentTrack.projects}</strong>
                  </span>
                )}
              </li>
              {currentTrack.details.map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={require(`../assets/${
                      currentTrack.bgClass === "product-bg"
                        ? "circle-tick-white.png"
                        : "circle-tick.png"
                    }`)}
                    alt="tick"
                    style={{ width: 17, height: 17, marginRight: "0.5rem" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <button className="apply-btn">Apply Now →</button>
          </div>

          <div className="image-section">
            <img
              src={currentTrack.imgSrc}
              alt={currentTrack.imgAlt}
              className="track-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
