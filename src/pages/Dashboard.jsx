import { useEffect } from "react";
import "./Dashboard.css";
import ResearchCarousel from "./EngagementTiles";
import PIPhoto from '../assets/SInoue.jpg';



export default function Dashboard() {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in-section");

    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        appearOnScroll.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  }, []);

  return (
    <>
      <div className="fade-in-section">
        <section className="profile">
          <div className="profile-image-container">
            <img
              src={PIPhoto}
              alt="Sayaka Inoue"
              className="profile-image"
            />
          </div>
          <div className="profile-info">
            <h2>Dr. Sayaka Inoue</h2>
            <p>Associate Professor, Department of Psychiatry</p>
            <p>
              Dr. Inoue’s research explores the neurobiological mechanisms
              underlying psychiatric disorders. Her work focuses on using
              advanced imaging techniques and animal models to investigate
              brain-behavior relationships.
            </p>
          </div>
        </section>
      </div>

      <div className="fade-in-section">
        <section className="research">
          <h2>Research Interests</h2>
          <p>
            Our lab is interested in understanding how the ovarian hormones estrogen and progesterone modulate social behaviors, anxiety, and mood, both in health and disease. Dysregulated ovarian hormone signaling is thought to be a key factor underlying diverse psychiatric symptoms observed in conditions such as premenstrual syndrome, premenstrual dysphoric disorder, and menopausal syndrome. My team aims to elucidate the neural mechanisms behind ovarian hormone-dependent behavioral changes throughout the lifespan. Towards this goal, I utilize an interdisciplinary approach that includes systems and molecular neurobiological techniques, applied to animal models that exhibit state changes in hormone levels. Current
            projects explore the intersection of neuroplasticity, behavior, and
            disease.
          </p>
        </section>
        <section className="carousel-container">
          <ResearchCarousel />
        </section>
      </div>
      {/* Embedded Google Map */}
      <div className="fade-in-section map-container">
        <h2>Visit the Lab</h2>
        <p>4559 Scott Ave, St. Louis, MO, USA</p>
        <div className="map-embed">
          <iframe
            title="Lab Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.3601057430367!2d-90.26378778465046!3d38.633476379613105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b5b268477b37%3A0xf31ae9cdccf60c86!2s4559%20Scott%20Ave%2C%20St.%20Louis%2C%20MO%2063110!5e0!3m2!1sen!2sus!4v1717000000000!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </>
  );
}
