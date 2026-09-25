import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import Telemetry from "../components/Telemetry";
import personalData from "../data/personalData";
import "./Garage.css";


function GarageCard({ item, index, kind }) {
  return (
    <Reveal variant="up" delay={index * 120}>

      <article className={`garage__card garage__card--${kind}`}>

        <div className="garage__card-bg" aria-hidden="true" />

        <div className="garage__card-top">

          <span className="garage__card-index">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="garage__card-status">
            DREAM MACHINE
          </span>

        </div>


        <div className="garage__machine">

          <div className="garage__machine-ring">
            <span />
          </div>

          <div className="garage__machine-glow" />

        </div>


        <div className="garage__card-content">

          <span className="garage__card-note">
            {item.note}
          </span>

          <h3 className="garage__card-name">
            {item.name}
          </h3>

        </div>


        <div className="garage__card-bottom">

          <span>
            NIKKE / GARAGE
          </span>

          <span className="garage__card-line" />

          <span>
            {String(index + 1).padStart(2, "0")}
          </span>

        </div>

      </article>

    </Reveal>
  );
}


export default function Garage() {

  const {
    dreamCar,
    dreamBike,
    racingInterest
  } = personalData.garage;

  const pc = personalData.pcSetup;

  const [scrollProgress, setScrollProgress] = useState(0);


  useEffect(() => {

    const handleScroll = () => {

      const section =
        document.getElementById("garage");

      if (!section) return;

      const rect =
        section.getBoundingClientRect();

      const viewport =
        window.innerHeight;

      const progress =
        Math.max(
          -1,
          Math.min(
            1,
            (viewport - rect.top) /
              (viewport + rect.height)
          )
        );

      setScrollProgress(progress);

    };


    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);


  return (

    <section
      id="garage"
      className="garage section"
    >

      {/* =================================================
          MOVING GARAGE ENVIRONMENT
          ================================================= */}

      <div
        className="garage__ambient"
        aria-hidden="true"
      >

        <div className="garage__ceiling-light" />

        <div className="garage__grid-floor" />

        <div
          className="garage__speed-lines"
          style={{
            transform:
              `translate3d(0, ${scrollProgress * -80}px, 0)`
          }}
        />

        <div
          className="garage__red-track"
          style={{
            transform:
              `translate3d(0, ${scrollProgress * 120}px, 0)`
          }}
        />

        <div className="garage__ambient-red" />

        <div className="garage__ambient-blue" />

        <div className="garage__particles" />

      </div>


      <div className="container garage__container">

        {/* =================================================
            HEADER
            ================================================= */}

        <Reveal variant="left">

          <header className="garage__header">

            <div className="garage__eyebrow">

              <span className="section-kicker">
                04 — GARAGE
              </span>

              <span className="garage__status">

                <span />

                PRIVATE COLLECTION

              </span>

            </div>


            <div className="garage__heading-row">

              <div>

                <h2 className="section-title garage__title">
                  My Dream Garage
                </h2>

                <p className="garage__subtitle">
                  MACHINES. SPEED. OBSESSION.
                </p>

              </div>


              <div className="garage__number">

                <span>
                  BAY
                </span>

                <strong>
                  04
                </strong>

              </div>

            </div>

          </header>

        </Reveal>


        {/* =================================================
            GARAGE MACHINES
            ================================================= */}

        <div className="garage__grid">

          <GarageCard
            item={dreamCar}
            index={0}
            kind="car"
          />

          <GarageCard
            item={dreamBike}
            index={1}
            kind="bike"
          />

          <GarageCard
            item={racingInterest}
            index={2}
            kind="racing"
          />

        </div>


        {/* =================================================
            GARAGE TELEMETRY
            ================================================= */}

        <Reveal
          variant="up"
          delay={180}
        >

          <div className="garage__telemetry">

            <span>
              GARAGE STATUS
            </span>

            <span className="garage__telemetry-line" />

            <span>
              03 MACHINES
            </span>

            <span className="garage__telemetry-line" />

            <span>
              DREAM MODE
            </span>

            <div className="garage__bars">

              <i />
              <i />
              <i />
              <i />
              <i />
              <i />

            </div>

          </div>

        </Reveal>


        {/* =================================================
            COMMAND CENTER
            ================================================= */}

        <div className="garage__pc">

          <Reveal
            variant="right"
            className="garage__pc-visual-wrap"
          >

            <div className="garage__pc-visual">

              <div
                className="garage__pc-image"
                style={{
                  backgroundImage:
                    `url(${pc.image})`
                }}
              />

              <div className="garage__pc-scan" />

              <div className="garage__pc-glow" />


              <div className="garage__pc-corners">

                <span />
                <span />
                <span />
                <span />

              </div>


              <div className="garage__pc-label">
                COMMAND CENTER / 001
              </div>


              <div className="garage__pc-hud">

                <div>
                  <span>RPM</span>
                  <strong>000</strong>
                </div>

                <div>
                  <span>SPEED</span>
                  <strong>000</strong>
                </div>

                <div>
                  <span>SYS</span>
                  <strong>OK</strong>
                </div>

              </div>

            </div>

          </Reveal>


          <Reveal
            variant="left"
            delay={100}
            className="garage__pc-content"
          >

            <Telemetry>
              COMMAND CENTER
            </Telemetry>


            <h3 className="garage__pc-title">
              {pc.title}
            </h3>


            <p className="garage__pc-description">
              Where the racing sims, edits and
              late-night builds happen — my
              personal command center.
            </p>


            <div className="garage__pc-specs">

              <div>

                <span>
                  SETUP
                </span>

                <strong>
                  RACING / CREATIVE
                </strong>

              </div>

              <div>

                <span>
                  MODE
                </span>

                <strong>
                  NIGHT DRIVE
                </strong>

              </div>

              <div>

                <span>
                  STATUS
                </span>

                <strong>
                  ONLINE
                </strong>

              </div>

            </div>


            <div className="garage__pc-quote">

              <span>
                //
              </span>

              <p>
                BUILD THE MACHINE.
                THEN BUILD THE DREAM.
              </p>

            </div>

          </Reveal>

        </div>


        {/* =================================================
            GARAGE FOOTER
            ================================================= */}

        <Reveal
          variant="up"
          delay={250}
        >

          <div className="garage__footer">

            <span>
              NIKKE'S PRIVATE GARAGE
            </span>

            <span className="garage__footer-line" />

            <span>
              SYSTEM / 04
            </span>

          </div>

        </Reveal>

      </div>

    </section>
  );
}