import Reveal from "../components/Reveal";
import Telemetry from "../components/Telemetry";
import personalData from "../data/personalData";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about section">

      {/* =====================================================
          PREMIUM BACKGROUND
          ===================================================== */}

      <div className="about__ambient" aria-hidden="true">
        <div className="about__orb about__orb--red" />
        <div className="about__orb about__orb--blue" />
        <div className="about__grid-lines" />
        <div className="about__scanline" />
      </div>


      <div className="container about__grid">

        {/* =====================================================
            LEFT — DRIVER INFORMATION
            ===================================================== */}

        <div className="about__content">

          <Reveal variant="left">

            <div className="about__eyebrow">

              <span className="section-kicker">
                01 — DRIVER PROFILE
              </span>

              <span className="about__status">
                <span className="about__status-dot" />
                SYSTEM ACTIVE
              </span>

            </div>


            <h2 className="section-title about__title">
              About Me
            </h2>


            <div className="about__signature">
              <span>NIKHIL</span>
              <span>DEVARAJ</span>
            </div>

          </Reveal>


          {/* =================================================
              ABOUT TEXT
              ================================================= */}

          <div className="about__text">

            {personalData.aboutText.map((line, i) => (

              <Reveal
                key={i}
                variant="up"
                delay={i * 90}
              >

                <p className="about__line">
                  {line}
                </p>

              </Reveal>

            ))}

          </div>


          {/* =================================================
              DRIVER DATA
              ================================================= */}

          <Reveal
            variant="up"
            delay={personalData.aboutText.length * 90}
          >

            <div className="about__stats">

              {/* AGE */}

              <div className="about__stat">

                <span className="about__stat-index">
                  01
                </span>

                <span className="about__stat-label">
                  AGE
                </span>

                <span className="about__stat-value">
                  {personalData.age}
                </span>

              </div>


              {/* BASE */}

              <div className="about__stat">

                <span className="about__stat-index">
                  02
                </span>

                <span className="about__stat-label">
                  BASE
                </span>

                <span className="about__stat-value">
                  {personalData.location.split(",")[0]}
                </span>

              </div>


              {/* EDUCATION */}

              <div className="about__stat about__stat--wide">

                <span className="about__stat-index">
                  03
                </span>

                <span className="about__stat-label">
                  EDUCATION
                </span>

                <span className="about__stat-value about__stat-value--small">
                  {personalData.education}
                </span>

              </div>

            </div>

          </Reveal>


          {/* =================================================
              TECHNICAL FOOTER
              ================================================= */}

          <Reveal
            variant="up"
            delay={personalData.aboutText.length * 90 + 180}
          >

            <div className="about__telemetry">

              <span>PROFILE_STATUS</span>

              <span className="about__telemetry-line" />

              <span>ONLINE</span>

            </div>

          </Reveal>

        </div>


        {/* =====================================================
            RIGHT — PREMIUM DRIVER CARD
            ===================================================== */}

        <Reveal
          variant="scale"
          className="about__card-wrap"
        >

          <div className="about__card panel">

            {/* TOP TECHNICAL BAR */}

            <div className="about__card-top">

              <div className="about__card-id">

                <span className="about__card-id-label">
                  DRIVER ID
                </span>

                <span className="about__card-id-value">
                  NDK-001
                </span>

              </div>


              <Telemetry>
                PILOT PROFILE
              </Telemetry>


              <span className="about__card-number">
                01
              </span>

            </div>


            {/* PHOTO */}

            <div className="about__photo">

              <div className="about__photo-corner about__photo-corner--tl" />
              <div className="about__photo-corner about__photo-corner--tr" />
              <div className="about__photo-corner about__photo-corner--bl" />
              <div className="about__photo-corner about__photo-corner--br" />

              <div className="about__photo-label">
                VISUAL / 001
              </div>

              <img
                src={personalData.profileImages[0]}
                alt={`${personalData.name} portrait`}
                loading="lazy"
              />

              <div className="about__photo-overlay" />

              <div className="about__photo-line" />

            </div>


            {/* CARD FOOTER */}

            <div className="about__card-footer">

              <div>

                <span className="about__card-name">
                  {personalData.name}
                </span>

                <span className="about__card-role">
                  DRIVER • CREATOR • DREAMER
                </span>

              </div>


              <div className="about__card-nick-wrap">

                <span className="about__card-nick-label">
                  CALLSIGN
                </span>

                <span className="about__card-nick">
                  "{personalData.nickname}"
                </span>

              </div>

            </div>


            {/* BOTTOM TECHNICAL BAR */}

            <div className="about__card-bottom">

              <span>
                BENGALURU / INDIA
              </span>

              <span className="about__card-bottom-line" />

              <span>
                PROFILE 01
              </span>

            </div>

          </div>

        </Reveal>

      </div>


      {/* =====================================================
          SECTION EDGE
          ===================================================== */}

      <div className="about__edge" aria-hidden="true">

        <span />
        <span />
        <span />

      </div>

    </section>
  );
}