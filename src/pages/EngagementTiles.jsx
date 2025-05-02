import { useState } from "react";
import "./EngagementTiles.css";
import ModelOne from "../assets/Male Sniffing Behavior.jpeg";

export default function EngagementTiles() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="engagement-section">
      <h2>Explore More from the Lab</h2>
      <div className="tiles-grid">
        {/* WHAT WE STUDY Tile */}
        <div className="tile" style={{ position: "relative" }}>
          <div className="icon-container mouse-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="64"
              height="64"
              className="mouse-svg"
            >
              <path
                d="M20 30c0-6 6-12 12-12s12 6 12 12-6 10-6 14c0 3.3 3 6 2 6s-6-2-10-2-8 2-10 2 2-2 2-6c0-4-6-8-6-14z"
                fill="#A7110E"
              />
              <circle cx="28" cy="26" r="2" fill="#fff" />
              <path
                d="M40 24c2-4 4-5 6-5s4 2 3 5c-1 3-4 5-6 5"
                fill="none"
                stroke="#A7110E"
                strokeWidth="2"
              />
              <path
                d="M12 42c4 6 12 10 20 10s16-4 20-10"
                stroke="#A7110E"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
          <h3>What We Study</h3>
          <p>
            Our lab investigates the neural mechanisms underlying social and reproductive behaviors.
          </p>
          <button
            className="rounded-button"
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(true);
            }}
          >
            Learn More
          </button>

          {/* ⬇️ Scoped Modal Overlay */}
          {showModal && (
            <div className="modal-overlay local" onClick={() => setShowModal(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Current Lab Projects</h2>
                <ul>
                  <li>Neural regulation of female mating behavior</li>
                  <li>Role of sensory circuits in social cue processing</li>
                  <li>Hormonal modulation of hypothalamic networks</li>
                  <li>Rodent models for reproductive neuroendocrinology</li>
                </ul>
                <button
                  className="rounded-button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* WASHU MED NEWS Tile */}
        <div className="tile">
          <div className="icon-container newspaper-icon">
            <svg viewBox="0 0 64 64" width="64" height="64" fill="#A7110E">
              <path d="M56 8H8a4 4 0 0 0-4 4v40c0 2.2 1.8 4 4 4h48a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4zm0 44H8V12h48v40zM14 18h14v4H14v-4zm0 8h10v4H14v-4zm0 8h14v4H14v-4zm22-16h14v16H36V18zm0 20h14v4H36v-4z" />
            </svg>
          </div>
          <h3>WashU Med News</h3>
          <p>
            Read about the latest breakthroughs and institutional news involving our collaborators and faculty.
          </p>
          <button
            className="rounded-button"
            onClick={() => window.open("https://medicine.wustl.edu/news", "_blank")}
          >
            Visit Newsroom
          </button>
        </div>

        {/* RESEARCH SPOTLIGHT Tile */}
        <div className="tile">
          <h3>Research Spotlight</h3>
          <img
            src={ModelOne}
            alt="Research Highlight"
            className="spotlight-image"
          />
          <button
            className="rounded-button"
            onClick={() =>
              window.open(
                "https://www.cell.com/cell/fulltext/S0092-8674(19)31175-4",
                "_blank"
              )
            }
          >
            Read Full Article
          </button>
        </div>
      </div>
    </div>
  );
}
