import { useState, useEffect, useRef } from "react";
import "./ResearchCarousel.css";
import PVLPhoto from "../assets/images/Pvl Projection.jpeg";
import Assayvid from "../assets/mmc2.mp4";
import ModelOne from "../assets/Male Sniffing Behavior.jpeg";

const researchSlides = [
  {
    type: "image",
    src: ModelOne,
    alt: "https://www.cell.com/cell/fulltext/S0092-8674(19)31175-4",
  },
  {
    type: "image",
    src: PVLPhoto,
    alt: "Periodic Remodeling in a Neural Circuit Governs Timing of Female Sexual Behavior Inoue Sayaka et al. Cell Volume 179 Issue 6 1393 - 1408.e16",
  },
  {
    type: "video",
    src: Assayvid,
    alt: "https://www.cell.com/cell/fulltext/S0092-8674(19)31175-4",
  },
];

export default function ResearchCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);

  // Autoplay logic with pause for videos
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === researchSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Pause autoplay on video play, resume on end
  useEffect(() => {
    const currentSlide = researchSlides[currentIndex];
    if (currentSlide.type === "video" && videoRef.current) {
      const vid = videoRef.current;

      const handlePlay = () => setIsPaused(true);
      const handleEnded = () => setIsPaused(false);

      vid.addEventListener("play", handlePlay);
      vid.addEventListener("ended", handleEnded);

      return () => {
        vid.removeEventListener("play", handlePlay);
        vid.removeEventListener("ended", handleEnded);
      };
    } else {
      setIsPaused(false);
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? researchSlides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === researchSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentSlide = researchSlides[currentIndex];

  return (
    <div className="carousel fade">
      <button className="arrow left" onClick={goToPrevious}>
        &#8656;
      </button>

      <div className="slide fade-in">
        {currentSlide.type === "image" ? (
          <img src={currentSlide.src} alt={currentSlide.alt} />
        ) : (
          <video
            ref={videoRef}
            src={currentSlide.src}
            controls
            autoPlay
            muted
            playsInline
            className="video-slide"
          />
        )}
        <p className="caption">{currentSlide.alt}</p>
      </div>

      <button className="arrow right" onClick={goToNext}>
        &#8658;
      </button>
    </div>
  );
}
