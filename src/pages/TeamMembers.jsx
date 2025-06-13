import { useEffect } from "react";
import "./TeamMembers.css";

// Images
import PIPhoto from "../assets/images/PI-photo.jpg";
import takaPhoto from "../assets/images/taka.jpg";
import christinePhoto from "../assets/images/christine.jpeg";
import aditiPhoto from "../assets/images/Aditi.jpeg";
import atharvPhoto from "../assets/images/Atharv.jpg";
import stevenPhoto from "../assets/images/Steven.jpg";
import paulPhoto from "../assets/images/paul.jpg";
import fernandaphoto from "../assets/images/fernandaphoto.jpg";


export default function TeamMembers() {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in-section, .member-card");

    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    return () => appearOnScroll.disconnect(); // Clean up
  }, []);

  const members = [
    {
      name: "Sayaka Inoue",
      role: "Principal Investigator",
      image: PIPhoto,
      // link: "https://profiles.wustl.edu/en/persons/sayaka-inoue",
    },
    {
      name: "Takahiro Sasaki",
      role: "Post-Doctorate Fellow",
      image: takaPhoto,
      description: "JSPS Overseas Research Fellow",
    },
    {
      name: "Christine Nwaigwe",
      role: "Research Assistant",
      image: christinePhoto,
      description: "NIH BP-ENDURE Research Fellow",
    },
    {
      name: "Atharv Kulkarni",
      role: "Lab Technician",
      image: atharvPhoto,
      // link: "https://example.com/atharv-profile",
    },
    {
      name: "Fernanda Bucio",
      role: "Undergraduate Researcher",
      image: fernandaphoto,
      description: "Amgen Scholar",
    },
    {
      name: "Steven Kim",
      role: "Undergraduate Research Assistant",
      image: stevenPhoto,
      // link: "https://example.com/steven-profile",
    },
    {
      name: "Paul Kwon",
      role: "Undergraduate Research Assistant",
      image: paulPhoto,
      // link: "https://example.com/paul-profile",
    },
  ];

  return (
    <div className="fade-in-section">
      <section className="people">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="members-container">
          {members.map((member, index) => (
            <a
              key={index}
              href={member.link}
              target="_blank"
              rel="noreferrer"
              className="member-card fade-in-section"
            >
              <img src={member.image} alt={member.name} className="member-photo" />
              <div>
                <p className="member-name">{member.name}</p>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
