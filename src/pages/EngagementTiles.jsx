import "./EngagementTiles.css";
import NEUROSCIENCE from "../assets/brain-illustration-12-svgrepo-com.svg";
import ENDO from "../assets/female-svgrepo-com.svg";

export default function EngagementTiles() {
  return (
    <div className="engagement-section">
      <h2>Explore Lab Focus Areas</h2>
      <div className="tiles-grid">

        {/* NEUROSCIENCE */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="icon-container">
                <img src={NEUROSCIENCE} alt="neuroscience icon" width={64} height={64} />
              </div>
              <h3>Neural Circuits</h3>
            </div>
            <div className="flip-card-back">
              <h3>Neuroscience</h3>
              <p>We use tracing, imaging, and optogenetics to uncover how brain circuits drive social behavior.</p>
            </div>
          </div>
        </div>

        {/* ENDOCRINOLOGY */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="icon-container">
                <img src={ENDO} alt="endocrinology icon" width={64} height={64} />
              </div>
              <h3>Hormonal Modulation</h3>
            </div>
            <div className="flip-card-back">
              <h3>Endocrinology</h3>
              <p>We explore how hormones like estrogen and oxytocin shape neural dynamics and behavior.</p>
            </div>
          </div>
        </div>

        {/* BEHAVIORAL ASSAYS */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="icon-container mouse-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" className="mouse-svg">
                  <path d="M20 30c0-6 6-12 12-12s12 6 12 12-6 10-6 14c0 3.3 3 6 2 6s-6-2-10-2-8 2-10 2 2-2 2-6c0-4-6-8-6-14z" fill="#A7110E" />
                  <circle cx="28" cy="26" r="2" fill="#fff" />
                  <path d="M40 24c2-4 4-5 6-5s4 2 3 5c-1 3-4 5-6 5" fill="none" stroke="#A7110E" strokeWidth="2" />
                  <path d="M12 42c4 6 12 10 20 10s16-4 20-10" stroke="#A7110E" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <h3>Behavioral Assays</h3>
            </div>
            <div className="flip-card-back">
              <h3>Behavioral Analysis</h3>
              <p>We assess social, mating, and decision-making behaviors through standardized rodent paradigms.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
