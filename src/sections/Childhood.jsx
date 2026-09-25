import Reveal from "../components/Reveal";
import personalData from "../data/personalData";
import "./Childhood.css";

export default function Childhood() {
  const { title, text, themes } = personalData.childhood;

  return (
    <section id="childhood" className="childhood section">

      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="childhood__ambient" aria-hidden="true">
        <div className="childhood__glow childhood__glow--red" />
        <div className="childhood__glow childhood__glow--blue" />
        <div className="childhood__grid" />
        <div className="childhood__speed-lines" />
      </div>


      <div className="container childhood__inner">

        {/* =================================================
            HEADER
            ================================================= */}

        <Reveal variant="left">

          <div className="childhood__header">

            <div className="childhood__eyebrow">

              <span className="section-kicker">
                02 — ORIGIN
              </span>

              <span className="childhood__archive">
                MEMORY ARCHIVE / 001
              </span>

            </div>


            <div className="childhood__heading-row">

              <div>

                <h2 className="section-title childhood__title">
                  {title}
                </h2>

                <div className="childhood__subtitle">
                  BEFORE THE TRACK, THERE WAS THE DREAM.
                </div>

              </div>


              <div className="childhood__counter">

                <span className="childhood__counter-label">
                  ORIGIN
                </span>

                <span className="childhood__counter-number">
                  01
                </span>

              </div>

            </div>


            <p className="section-lede childhood__lede">
              {text}
            </p>

          </div>

        </Reveal>


        {/* =================================================
            MEMORY TIMELINE
            ================================================= */}

        <div className="childhood__timeline">

          <div className="childhood__timeline-line" />

          {themes.map((theme, i) => (

            <Reveal
              key={theme}
              variant="up"
              delay={i * 100}
            >

              <article className="childhood__memory">

                {/* NUMBER */}

                <div className="childhood__memory-marker">

                  <span>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* CARD */}

                <div className="childhood__card panel">

                  <div className="childhood__card-top">

                    <span className="childhood__card-code">
                      MEMORY_{String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="childhood__card-status">
                      ARCHIVED
                    </span>

                  </div>


                  <div className="childhood__card-body">

                    <div className="childhood__card-icon">

                      <span className="childhood__icon-wheel" />

                    </div>


                    <div>

                      <span className="childhood__card-label">
                        {theme}
                      </span>

                      <p className="childhood__card-text">
                        A small beginning that became part of the journey.
                      </p>

                    </div>

                  </div>


                  <div className="childhood__card-bottom">

                    <span>
                      NIKKE / ORIGIN
                    </span>

                    <span className="childhood__card-line" />

                    <span>
                      00{i + 1}
                    </span>

                  </div>

                </div>

              </article>

            </Reveal>

          ))}

        </div>


        {/* =================================================
            BOTTOM STATEMENT
            ================================================= */}

        <Reveal
          variant="up"
          delay={themes.length * 100 + 150}
        >

          <div className="childhood__quote">

            <span className="childhood__quote-mark">
              //
            </span>

            <span>
              THE PASSION STARTED LONG BEFORE THE STARTING GRID.
            </span>

            <span className="childhood__quote-line" />

          </div>

        </Reveal>

      </div>

    </section>
  );
}