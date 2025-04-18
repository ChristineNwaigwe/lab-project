//Huge shouout to Shaza Ali for helping with the project//
import { useEffect, useState } from "react";
import "./TeamMembers.css";

// Importing images
import PIPhoto from "../assets/images/PI-photo.jpg";
import takaPhoto from "../assets/images/taka.jpg";
import christinePhoto from "../assets/images/christine.jpeg";
import aditiPhoto from "../assets/images/Aditi.jpeg";
import atharvPhoto from "../assets/images/Atharv.jpg";
import stevenPhoto from "../assets/images/Steven.jpg";
import paulPhoto from "../assets/images/paul.jpg";

export default function TeamMembers() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in-member");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    });
    faders.forEach((el) => observer.observe(el));
  }, []);

  const members = [
    {
      name: "Sayaka Inoue",
      role: "Principal Investigator",
      image: PIPhoto,
      link: "https://profiles.wustl.edu/en/persons/sayaka-inoue",
    },
    {
      name: "Takahiro Sasaki",
      role: "Post-Doctorate Fellow",
      image: takaPhoto,
      link: "https://example.com/taka-profile",
    },
    {
      name: "Christine Nwaigwe",
      role: "Research Assistant",
      image: christinePhoto,
      link: "https://example.com/christine-profile",
    },
     {
      name: "Atharv Kulkarni",
      role: "Lab Technician",
      image: atharvPhoto, // Imported image variable
      link: "https://example.com/atharv-profile",
    },
    {
      name: "Aditi Ashwin",
      role: "Rotating PhD Candidate",
      image: aditiPhoto, // Imported image variable
      link: "https://example.com/aditi-profile",
    },
    {
      name: "Steven Kim",
      role: "Undergraduate Research Assistant",
      image: stevenPhoto, // Imported image variable
      link: "https://example.com/steven-profile",
    },
    {
      name: "Paul Kwon",
      role: "Undergraduate Research Assistant",
      image: paulPhoto, // Imported image variable
      link: "https://example.com/paul-profile",
    },
  ];

  // Filter members based on search input
  const filteredMembers = members.filter((member) =>
    `${member.name} ${member.role}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="people">
      <h2>Our Team</h2>

      <input
        type="text"
        placeholder="Search team members..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="members-container">
        {filteredMembers.map((member, index) => (
          <a
            key={index}
            href={member.link}
            target="_blank"
            rel="noreferrer"
            className="member-profile fade-in-member"
          >
            <img src={member.image} alt={member.name} className="profile-picture" />
            <p><strong>{member.name}</strong></p>
            <p>{member.role}</p>
          </a>
        ))}
        {filteredMembers.length === 0 && (
          <p className="no-results">No team members found.</p>
        )}
      </div>
    </section>
  );
}
