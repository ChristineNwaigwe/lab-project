import { useEffect } from "react";
import "./Dashboard.css";
import PIPhoto from "../assets/images/PI-photo.jpg";

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
          <div className="profile-image">
            img: {PIPhoto}
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
      </div>
    </>
  );
}
