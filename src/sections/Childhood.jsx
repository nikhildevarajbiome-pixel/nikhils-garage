import { useEffect, useRef, useState } from "react";
import Reveal from "../components/Reveal";
import Telemetry from "../components/Telemetry";
import personalData from "../data/personalData";
import "./Childhood.css";

const memories = [
  {
    number: "01",
    year: "THE BEGINNING",
    title: "Hot Wheels",
    text: "Long before real race tracks, there were tiny cars, endless imagination, and a fascination with machines.",
    tag: "FIRST PASSION",
    icon: "◈",
  },
  {
    number: "02",
    year: "THE NEXT STEP",
    title: "RC Cars & Trucks",
    text: "The passion became interactive. Controlling RC cars and trucks turned playing with machines into a genuine obsession.",
    tag: "CONTROL",
    icon: "⌁",
  },
  {
    number: "03",
    year: "DISCOVERY",
    title: "Formula 1",
    text: "Speed, strategy, engineering and the sound of racing opened the door to the world of Formula 1.",
    tag: "THE GRID",
    icon: "✦",
  },
  {
    number: "04",
    year: "BEHIND THE WHEEL",
    title: "Go-Karting",
    text: "The dream finally moved from watching the track to experiencing it. The first real taste of racing.",
    tag: "DRIVER MODE",
    icon: "↗",
  },
];

function MemoryCard({ memory, index }) {
  const cardRef = useRef(null);
  const [active, setActive] = useState(false);

  const handleMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);

    setActive(true);
  };

  const handleLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");

    setActive(false);
  };

  return (
    <Reveal
      variant="up"
      delay={index * 120}
      className="origin__reveal"
    >
      <article
        ref={cardRef}
        className={`origin-card ${active ? "origin-card--active" : ""}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div className="origin-card__spotlight" />

        <div className="origin-card__scan" />

        <div className="origin-card__top">
          <span className="origin-card__number">
            {memory.number}
          </span>

          <span className="origin-card__year">
            {memory.year}
          </span>

          <span className="origin-card__icon">
            {memory.icon}
          </span>
        </div>

        <div className="origin-card__line" />

        <div className="origin-card__content">
          <span className="origin-card__tag">
            {memory.tag}
          </span>

          <h3>{memory.title}</h3>

          <p>{memory.text}</p>
        </div>

        <div className="origin-card__bottom">
          <span>ORIGIN MEMORY</span>

          <span className="origin-card__status">
            <i />
            ARCHIVED
          </span>
        </div>

        <div className="origin-card__corner origin-card__corner--tl" />
        <div className="origin-card__corner origin-card__corner--tr" />
        <div className="origin-card__corner origin-card__corner--bl" />
        <div className="origin-card__corner origin-card__corner--br" />
      </article>
    </Reveal>
  );
}

export default function Childhood() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;

      const total = rect.height + viewport;
      const current = viewport - rect.top;

      const value = Math.min(
        1,
        Math.max(0, current / total)
      );

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="childhood"
      ref={sectionRef}
      className="origin section"
      style={{
        "--origin-progress": progress,
      }}
    >
      {/* ATMOSPHERE */}
      <div className="origin__atmosphere" aria-hidden="true">
        <div className="origin__orb origin__orb--red" />
        <div className="origin__orb origin__orb--blue" />

        <div className="origin__grid" />

        <div className="origin__stars">
          {Array.from({ length: 35 }).map((_, index) => (
            <span
              key={index}
              style={{
                "--i": index,
              }}
            />
          ))}
        </div>

        <div className="origin__speed-line origin__speed-line--one" />
        <div className="origin__speed-line origin__speed-line--two" />
        <div className="origin__speed-line origin__speed-line--three" />

        <div className="origin__red-beam" />
      </div>

      <div className="container origin__container">

        {/* HEADER */}
        <div className="origin__header">
          <Reveal variant="up">
            <div className="origin__eyebrow">
              <Telemetry>
                ORIGIN SYSTEM
              </Telemetry>

              <span className="origin__live">
                <i />
                MEMORY ARCHIVE
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="origin__heading-wrap">
              <span className="origin__vertical-label">
                02 / ORIGIN
              </span>

              <div>
                <span className="origin__mini-title">
                  WHERE IT ALL STARTED
                </span>

                <h2>
                  Before The Track,
                  <br />
                  <strong>There Was The Dream.</strong>
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <p className="origin__intro">
              Every passion has a starting point.
              Mine started with small cars, big
              imagination, and a fascination with
              everything that moves fast.
            </p>
          </Reveal>
        </div>

        {/* MAIN MEMORY SYSTEM */}
        <div className="origin__system">

          {/* CONNECTING TRACK */}
          <div className="origin__track" aria-hidden="true">
            <div className="origin__track-base" />
            <div
              className="origin__track-progress"
              style={{
                transform: `scaleY(${progress})`,
              }}
            />

            <div
              className="origin__track-light"
              style={{
                top: `${progress * 100}%`,
              }}
            />

            <span className="origin__track-dot origin__track-dot--1" />
            <span className="origin__track-dot origin__track-dot--2" />
            <span className="origin__track-dot origin__track-dot--3" />
            <span className="origin__track-dot origin__track-dot--4" />
          </div>

          <div className="origin__cards">
            {memories.map((memory, index) => (
              <MemoryCard
                key={memory.number}
                memory={memory}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* FINAL STATEMENT */}
        <Reveal variant="scale" delay={250}>
          <div className="origin__statement">

            <div className="origin__statement-top">
              <span>ORIGIN / 0001</span>
              <span>PASSION INITIALIZED</span>
              <span>STATUS: ACTIVE</span>
            </div>

            <div className="origin__statement-main">
              <div className="origin__statement-symbol">
                ×
              </div>

              <div>
                <span>
                  THE STARTING POINT
                </span>

                <h3>
                  The passion started
                  <br />
                  <strong>long before the starting grid.</strong>
                </h3>
              </div>
            </div>

            <div className="origin__statement-bottom">
              <span>FROM TOYS</span>
              <span>TO MACHINES</span>
              <span>TO THE DREAM</span>
            </div>

          </div>
        </Reveal>

      </div>

      {/* EDGE TELEMETRY */}
      <div className="origin__edge-data" aria-hidden="true">
        <span>ORIGIN.LOG</span>
        <span>PASSION_001</span>
        <span>∞</span>
      </div>

    </section>
  );
}