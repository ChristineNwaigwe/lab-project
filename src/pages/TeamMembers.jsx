import { useEffect } from "react";
import "./TeamMembers.css";

// Importing images
import PIPhoto from "../assets/images/PI-photo.jpg"
import takaPhoto from "../assets/images/taka.jpg";
import christinePhoto from "../assets/images/christine.jpeg";
// import atharvPhoto from "./images/atharv.jpg";
// import aditiPhoto from "./images/aditi.jpg";
// import stevenPhoto from "./images/steven.jpg";
// import paulPhoto from "./images/paul.jpg";

export default function TeamMembers() {
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
      name: "Dr. Sayaka Inoue",
      role: "Principal Investigator",
      image: PIPhoto, // Imported image variable
      link: "https://profiles.wustl.edu/en/persons/sayaka-inoue",
    },
    {
      name: "Takahiro Sasaki",
      role: "Post-Grad",
      image: takaPhoto, // Imported image variable
      link: "https://example.com/taka-profile",
    },
    {
      name: "Christine Nwaigwe",
      role: "Research Assistant",
      image: christinePhoto, // Imported image variable
      link: "https://example.com/christine-profile",
    },
    // {
    //   name: "Atharv Kulkarni",
    //   role: "Lab Technician",
    //   image: atharvPhoto, // Imported image variable
    //   link: "https://example.com/atharv-profile",
    // },
    // {
    //   name: "Aditi Ashwin",
    //   role: "Rotating PhD Candidate",
    //   image: aditiPhoto, // Imported image variable
    //   link: "https://example.com/aditi-profile",
    // },
    // {
    //   name: "Steven Kim",
    //   role: "Undergraduate Research Assistant",
    //   image: stevenPhoto, // Imported image variable
    //   link: "https://example.com/steven-profile",
    // },
    // {
    //   name: "Paul Kwon",
    //   role: "Undergraduate Research Assistant",
    //   image: paulPhoto, // Imported image variable
    //   link: "https://example.com/paul-profile",
    // },
  ];

  return (
    <section className="people">
      <h2>Our Team</h2>
      <div className="members-container">
        {members.map((member, index) => (
          <a
            key={index}
            href={member.link}
            target="_blank"
            rel="noreferrer"
            className="member-profile fade-in-member"
          >
            <img src={member.image} alt={`${member.name}`} className="profile-picture" />
            <p><strong>{member.name}</strong></p>
            <p>{member.role}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
