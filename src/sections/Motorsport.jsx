import { useState } from "react";
import Reveal from "../components/Reveal";
import Telemetry from "../components/Telemetry";
import Modal from "../components/Modal";
import personalData from "../data/personalData";
import "./Motorsport.css";

/*
  =========================================================
  MOTORSPORT IMAGES
  =========================================================

  Put your images inside:

  public/images/

  Then change ONLY these paths if your filenames are different.
*/

const motorsportImages = {
  hamilton: "/images/hamilton-mercedes.jpg",
  ferrari: "/images/ferrari.jpg",
  car2018: "/images/f1-2018.jpg",
  karting: "/images/gokarting.jpg",
};


export default function Motorsport() {

  const {
    favoriteDriver,
    favoriteTeams,
    favoriteCar,
    favoriteCarReason,
    childhoodDream,
    interests,
  } = personalData.motorsport;

  const {
    title: kartTitle,
    venue,
    certificateImage,
  } = personalData.goKarting;

  const [certOpen, setCertOpen] =
    useState(false);


  return (

    <section
      id="motorsport"
      className="motorsport section"
    >

      {/* =================================================
          RACE TRACK BACKGROUND
          ================================================= */}

      <div
        className="motorsport__ambient"
        aria-hidden="true"
      >

        <div className="motorsport__asphalt" />

        <div className="motorsport__track-track" />

        <div className="motorsport__track-line" />

        <div className="motorsport__track-glow" />

        <div className="motorsport__lights" />

        <div className="motorsport__grid-lines" />

      </div>


      <div className="container motorsport__container">

        {/* =================================================
            HEADER
            ================================================= */}

        <Reveal variant="left">

          <div className="motorsport__header">

            <div className="motorsport__eyebrow">

              <span className="section-kicker">
                03 — MOTORSPORT
              </span>

              <span className="motorsport__status">
                <span className="motorsport__status-dot" />
                RACING SYSTEM ONLINE
              </span>

            </div>


            <div className="motorsport__heading-row">

              <div>

                <h2 className="section-title motorsport__title">
                  F1 &amp; Motorsports
                </h2>

                <p className="motorsport__subtitle">
                  WHERE SPEED BECAME A PASSION.
                </p>

              </div>


              <div className="motorsport__lap">

                <span>
                  LAP
                </span>

                <strong>
                  03
                </strong>

              </div>

            </div>

          </div>

        </Reveal>


        {/* =================================================
            HERO DRIVER IMAGE
            ================================================= */}

        <Reveal variant="scale">

          <article className="motorsport__hero-card">

            <div className="motorsport__hero-image">

              <img
                src={motorsportImages.hamilton}
                alt="Lewis Hamilton and Mercedes"
                loading="lazy"
              />

              <div className="motorsport__image-overlay" />

              <span className="motorsport__image-code">
                DRIVER / 001
              </span>

              <span className="motorsport__image-corner tl" />
              <span className="motorsport__image-corner tr" />
              <span className="motorsport__image-corner bl" />
              <span className="motorsport__image-corner br" />

            </div>


            <div className="motorsport__hero-info">

              <div>

                <span className="motorsport__hero-label">
                  FAVORITE DRIVER
                </span>

                <h3>
                  {favoriteDriver}
                </h3>

              </div>


              <div className="motorsport__hero-team">

                <span>
                  TEAM
                </span>

                <strong>
                  {favoriteTeams.join(" / ")}
                </strong>

              </div>

            </div>


            <div className="motorsport__hero-bottom">

              <span>
                NIKKE / DRIVER INSPIRATION
              </span>

              <span className="motorsport__hero-line" />

              <span>
                001
              </span>

            </div>

          </article>

        </Reveal>


        {/* =================================================
            FERRARI + 2018 IMAGES
            ================================================= */}

        <div className="motorsport__gallery">


          {/* FERRARI */}

          <Reveal
            variant="up"
            delay={80}
          >

            <article className="motorsport__gallery-card">

              <div className="motorsport__gallery-image">

                <img
                  src={motorsportImages.ferrari}
                  alt="Ferrari Formula 1 car"
                  loading="lazy"
                />

                <div className="motorsport__image-overlay" />

                <span className="motorsport__gallery-code">
                  MACHINE / 002
                </span>

              </div>


              <div className="motorsport__gallery-info">

                <span>
                  FAVORITE TEAM
                </span>

                <h3>
                  Ferrari
                </h3>

                <p>
                  One of the names that makes Formula 1 special.
                </p>

              </div>

            </article>

          </Reveal>


          {/* 2018 */}

          <Reveal
            variant="up"
            delay={160}
          >

            <article className="motorsport__gallery-card">

              <div className="motorsport__gallery-image">

                <img
                  src={motorsportImages.car2018}
                  alt="2018 Formula 1 car"
                  loading="lazy"
                />

                <div className="motorsport__image-overlay" />

                <span className="motorsport__gallery-code">
                  MEMORY / 018
                </span>

              </div>


              <div className="motorsport__gallery-info">

                <span>
                  CHILDHOOD FAVORITE
                </span>

                <h3>
                  2018 F1
                </h3>

                <p>
                  {favoriteCarReason}
                </p>

              </div>

            </article>

          </Reveal>

        </div>


        {/* =================================================
            FAVORITE CAR / DREAM
            ================================================= */}

        <div className="motorsport__facts">

          <Reveal
            variant="up"
            delay={100}
          >

            <article className="motorsport__fact">

              <Telemetry>
                FAVORITE CAR
              </Telemetry>

              <h3>
                {favoriteCar}
              </h3>

              <p>
                {favoriteCarReason}
              </p>

            </article>

          </Reveal>


          <Reveal
            variant="up"
            delay={180}
          >

            <article className="motorsport__fact">

              <Telemetry>
                CHILDHOOD DREAM
              </Telemetry>

              <p className="motorsport__dream">
                {childhoodDream}
              </p>

            </article>

          </Reveal>

        </div>


        {/* =================================================
            INTEREST TAGS
            ================================================= */}

        <Reveal
          variant="up"
          delay={100}
        >

          <div className="motorsport__tags">

            {interests.map((tag) => (

              <span
                key={tag}
                className="motorsport__tag"
              >
                {tag}
              </span>

            ))}

          </div>

        </Reveal>


        {/* =================================================
            GO KARTING
            ================================================= */}

        <Reveal
          variant="scale"
          delay={140}
        >

          <article className="motorsport__kart">

            <div
              className="motorsport__kart-background"
              style={{
                backgroundImage:
                  `url(${motorsportImages.karting})`,
              }}
            />

            <div className="motorsport__kart-overlay" />

            <div className="motorsport__kart-track-line" />

            <div className="motorsport__kart-content">

              <span className="section-kicker">
                MY FIRST STEP INTO RACING
              </span>

              <h3 className="motorsport__kart-title">
                {kartTitle}
              </h3>

              <p className="motorsport__kart-venue">
                {venue}
              </p>

              <div className="motorsport__kart-meta">

                <span>
                  KARTING
                </span>

                <span>
                  KENGERI
                </span>

                <span>
                  DRIVER / NIKKE
                </span>

              </div>

              <button
                className="btn"
                onClick={() =>
                  setCertOpen(true)
                }
              >
                View Certificate
              </button>

            </div>

          </article>

        </Reveal>


        {/* =================================================
            BOTTOM TELEMETRY
            ================================================= */}

        <Reveal
          variant="up"
          delay={200}
        >

          <div className="motorsport__telemetry">

            <span>
              SPEED
            </span>

            <span className="motorsport__telemetry-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>

            <span>
              PASSION / 100%
            </span>

            <span className="motorsport__telemetry-line" />

            <span>
              RACE MODE
            </span>

          </div>

        </Reveal>

      </div>


      {/* =================================================
          CERTIFICATE MODAL
          ================================================= */}

      <Modal
        open={certOpen}
        onClose={() =>
          setCertOpen(false)
        }
        label="Go-karting certificate"
      >

        <img
          src={certificateImage}
          alt="Go-karting certificate from GO GRIPS, Kengeri"
        />

      </Modal>

    </section>
  );
}