import Reveal from "../components/Reveal";
import Telemetry from "../components/Telemetry";
import personalData from "../data/personalData";
import "./Future.css";

export default function Future() {
  const {
    title,
    ambitions,
    quote,
    subQuote,
  } = personalData.future;

  const roadmap = [
    {
      number: "01",
      title: "DREAM",
      text: "Keep the vision alive.",
    },
    {
      number: "02",
      title: "TRAIN",
      text: "Build skill. Build discipline.",
    },
    {
      number: "03",
      title: "RACE",
      text: "Turn passion into experience.",
    },
    {
      number: "04",
      title: "ENDURANCE",
      text: "Push beyond the limits.",
    },
    {
      number: "05",
      title: "LEGACY",
      text: "Leave something behind.",
    },
  ];

  return (
    <section id="future" className="future section">

      {/* BACKGROUND */}
      <div className="future__stars" />

      <div className="future__glow future__glow--red" />
      <div className="future__glow future__glow--blue" />

      {/* TRACK */}
      <div className="future__track">
        <div className="future__track-line" />

        <div className="future__track-light future__track-light--1" />
        <div className="future__track-light future__track-light--2" />
        <div className="future__track-light future__track-light--3" />
      </div>

      <div className="container future__inner">

        {/* HEADER */}
        <Reveal variant="up">
          <div className="future__header">

            <Telemetry>
              AHEAD / MISSION
            </Telemetry>

            <span className="section-kicker">
              06 — AHEAD
            </span>

            <h2 className="future__title">
              {title}
            </h2>

            <p className="future__intro">
              The destination is still ahead.
              The work starts now.
            </p>

          </div>
        </Reveal>


        {/* AMBITIONS */}
        <Reveal variant="up" delay={100}>
          <div className="future__ambitions">

            {ambitions.map((ambition, index) => (
              <div
                className="future__ambition"
                key={ambition}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {ambition}
                </strong>
              </div>
            ))}

          </div>
        </Reveal>


        {/* ROADMAP */}
        <Reveal variant="up" delay={160}>
          <div className="future__roadmap">

            <div className="future__roadmap-head">
              <span>
                MISSION ROADMAP
              </span>

              <span>
                NDK / 006
              </span>
            </div>

            <div className="future__roadmap-line">
              <div className="future__roadmap-progress" />
            </div>

            <div className="future__roadmap-grid">

              {roadmap.map((item, index) => (
                <div
                  className={`future__step ${
                    index === 0
                      ? "future__step--active"
                      : ""
                  }`}
                  key={item.number}
                >

                  <div className="future__step-number">
                    {item.number}
                  </div>

                  <div className="future__step-content">

                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.text}
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </Reveal>


        {/* NEXT DESTINATION */}
        <Reveal variant="up" delay={220}>
          <div className="future__mission">

            <div className="future__mission-left">

              <span className="future__mission-label">
                NEXT DESTINATION
              </span>

              <h3>
                FROM THE
                <br />

                <span>
                  GRID
                </span>

                TO THE
                <br />

                WORLD.
              </h3>

              <p className="future__mission-quote">
                "{quote}"
              </p>

              <span className="future__mission-subquote">
                {subQuote}
              </span>

            </div>


            <div className="future__mission-right">

              <div className="future__telemetry">
                <span>
                  STATUS
                </span>

                <strong>
                  IN PROGRESS
                </strong>
              </div>

              <div className="future__telemetry">
                <span>
                  MISSION
                </span>

                <strong>
                  ENDURANCE
                </strong>
              </div>

              <div className="future__telemetry">
                <span>
                  DRIVER
                </span>

                <strong>
                  NIKKE / 21
                </strong>
              </div>

            </div>

          </div>
        </Reveal>


        {/* FOOTER */}
        <div className="future__footer">

          <span>
            MISSION STATUS
            <strong>
              {" "}ACTIVE
            </strong>
          </span>

          <span>
            06 / AHEAD
          </span>

        </div>

      </div>
    </section>
  );
}