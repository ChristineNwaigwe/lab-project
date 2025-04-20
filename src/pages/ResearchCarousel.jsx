import { useState, useEffect } from "react";
import "./ResearchCarousel.css";

const researchSlides = [
    {
        type: "image",
        src: "/assets/research-infographic1.jpg",
        alt: "https://www.cell.com/cell/fulltext/S0092-8674(19)31175-4",
    },
    {
        type: "image",
        src: "/assets/images/Pvl Projection.jpeg",
        alt: "https://www.cell.com/cell/fulltext/S0092-8674(19)31175-4",
    },
    {
        type: "video",
        src: "src\assets\mmc2.mp4", // Example video from the Cell article
        alt: "https://www.cell.com/cell/fulltext/S0092-8674(19)31175-4",
    },
];

export default function ResearchCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Autoplay logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === researchSlides.length - 1 ? 0 : prevIndex + 1
            );
        }, 8000); // Change every 8 seconds

        return () => clearInterval(interval);
    }, []);

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
        <div className="carousel">
            <button className="arrow left" onClick={goToPrevious}>
                &#8656;
            </button>

            <div className="slide">
                {currentSlide.type === "image" ? (
                    <img src={currentSlide.src} alt={currentSlide.alt} />
                ) : (
                    <video
                        src={currentSlide.src}
                        controls
                        autoPlay
                        muted
                        loop
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
