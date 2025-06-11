import { useEffect, useRef } from "react";
import "./LabGallery.css";

// Import media
import lab1 from "../assets/lab-photos/IMG_5628.jpg";
import lab2 from "../assets/lab-photos/IMG_0589.jpg";
import outing2 from "../assets/lab-photos/20250502_203856.jpg";
import conf1 from "../assets/lab-photos/IMG_0518.jpg";
import outingVideo1 from "../assets/lab-photos/20250502_203241.mp4";
import outingVideo2 from "../assets/lab-photos/20250502_200917.mp4";
import lp1 from "../assets/lab-photos/DSC_0046.jpg";
import lp2 from "../assets/lab-photos/original-1761A51B-A32A-4A38-B9DA-B4363E2EC8D8.jpeg";
import lp3 from "../assets/lab-photos/IMG_4463.jpg";
import lp4 from "../assets/lab-photos/IMG_6411.jpg";

const media = [
  { type: "image", src: lab1 },
  { type: "image", src: lab2 },
  { type: "video", src: outingVideo1 },
  { type: "image", src: outing2 },
  { type: "video", src: outingVideo2 },
  { type: "image", src: conf1 },
  { type: "image", src: lp1 },
  { type: "image", src: lp2 },
  { type: "image", src: lp3 },
  { type: "image", src: lp4 },
];

const news = [
  {
    title: "Spring Poster Session",
    date: "May 2025",
    description: "Our team presented exciting results at the departmental spring symposium.",
  },
  {
    title: "Lab Bowling Event",
    date: "April 2025",
    description: "Team bonding, bowling, and snacks — science in the alley!",
  },
  {
    title: "Sayaka receives NARSAD Young Investigator Award",
    date: "March 2021",
    description: "Congratulations to Dr. Inoue on this prestigious recognition.",
  },
];

export default function LabGallery() {
  const gridRef = useRef(null);

  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    faders.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const rowHeight = parseInt(getComputedStyle(grid).getPropertyValue("grid-auto-rows"));
    const gap = parseInt(getComputedStyle(grid).getPropertyValue("gap"));

    const resizeItem = (tile) => {
      const media = tile.querySelector("img, video");
      if (!media) return;
      const height = media.getBoundingClientRect().height;
      const rowSpan = Math.ceil((height + gap) / (rowHeight + gap));
      tile.style.setProperty("--row-span", rowSpan);
    };

    const setupResize = () => {
      grid.querySelectorAll(".media-tile").forEach((tile) => {
        const media = tile.querySelector("img, video");
        if (!media) return;

        if (media.tagName === "IMG") {
          media.onload = () => resizeItem(tile);
        } else if (media.tagName === "VIDEO") {
          media.onloadedmetadata = () => resizeItem(tile);
        }
      });
    };

    setupResize();
    window.addEventListener("resize", () => {
      grid.querySelectorAll(".media-tile").forEach(resizeItem);
    });

    return () => {
      window.removeEventListener("resize", () => {
        grid.querySelectorAll(".media-tile").forEach(resizeItem);
      });
    };
  }, []);

  return (
    <div className="main-content fade-in-section">
      <div className="lab-gallery-section">
        <h2>Lab Life & News</h2>
        <div className="gallery-news-grid">
          <div className="lab-photo-grid" ref={gridRef}>
            {media.map((item, index) => (
              <div className="media-tile fade-in-section" key={index}>
                {item.type === "image" ? (
                  <img src={item.src} alt={`Lab media ${index + 1}`} />
                ) : (
                  <video src={item.src} controls muted playsInline />
                )}
              </div>
            ))}
          </div>
          <div className="lab-news">
            {news.map((item, i) => (
              <div className="news-item fade-in-section" key={i}>
                <h4>{item.title}</h4>
                <p className="news-date">{item.date}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
