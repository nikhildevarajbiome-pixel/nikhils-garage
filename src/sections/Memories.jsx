import { useState } from "react";
import Reveal from "../components/Reveal";
import Modal from "../components/Modal";
import personalData from "../data/personalData";
import "./Memories.css";

function GalleryCard({ src, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Reveal
        variant="scale"
        delay={index * 100}
        className={`memories__card memories__card--${index % 3}`}
      >
        <button
          className="memories__card-btn"
          onClick={() => setOpen(true)}
          aria-label={`Open memory ${index + 1}`}
        >
          <img
            src={src}
            alt={`Nikhil memory ${index + 1}`}
            loading="lazy"
          />

          <span className="memories__corner memories__corner--tl" />
          <span className="memories__corner memories__corner--br" />

          <span className="memories__image-label">
            MEMORY / {String(index + 1).padStart(2, "0")}
          </span>

          <span className="memories__image-scan" />
        </button>
      </Reveal>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        label={`Memory ${index + 1}`}
      >
        <img
          src={src}
          alt={`Nikhil memory ${index + 1} enlarged`}
        />
      </Modal>
    </>
  );
}

function VideoCard({ video, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Reveal
        variant="up"
        delay={index * 90}
        className="memories__video-card"
      >
        <button
          className="memories__video-thumb"
          onClick={() => setOpen(true)}
          aria-label={`Play ${video.title}`}
        >
          {video.poster && (
            <img
              src={video.poster}
              alt=""
              loading="lazy"
            />
          )}

          <span className="memories__play">▶</span>

          <span className="memories__video-code">
            VIDEO / {String(index + 1).padStart(2, "0")}
          </span>
        </button>

        <span className="memories__video-title">
          {video.title}
        </span>
      </Reveal>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        label={video.title}
      >
        {video.type === "youtube" ? (
          <div className="memories__video-embed">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <video
            src={video.src}
            controls
            autoPlay
            poster={video.poster}
          />
        )}
      </Modal>
    </>
  );
}

export default function Memories() {
  const {
    profileImages = [],
    videos = [],
  } = personalData;

  return (
    <section id="memories" className="memories section">

      {/* BACKGROUND */}
      <div className="memories__glow memories__glow--red" />
      <div className="memories__glow memories__glow--blue" />
      <div className="memories__speed-line" />

      <div className="container">

        {/* HEADER */}
        <Reveal variant="left">
          <div className="memories__header">

            <span className="section-kicker">
              05 — MEMORY ARCHIVE
            </span>

            <h2 className="memories__title">
              MOMENTS
              <br />
              <span>THAT STAY.</span>
            </h2>

            <p className="memories__lede">
              A collection of moments, machines, places and memories
              that became part of the journey.
            </p>

          </div>
        </Reveal>


        {/* PHOTO GALLERY */}
        <div className="memories__gallery">
          {profileImages.map((src, index) => (
            <GalleryCard
              key={`${src}-${index}`}
              src={src}
              index={index}
            />
          ))}
        </div>


        {/* VIDEO ARCHIVE */}
        {videos.length > 0 && (
          <div className="memories__videos">

            <div className="memories__section-heading">

              <span className="section-kicker">
                VIDEO ARCHIVE
              </span>

              <span className="memories__heading-line" />

            </div>

            <div className="memories__video-grid">

              {videos.map((video, index) => (
                <VideoCard
                  key={`${video.title}-${index}`}
                  video={video}
                  index={index}
                />
              ))}

            </div>

          </div>
        )}


        {/* ARCHIVE FOOTER */}
        <div className="memories__archive-footer">

          <span>
            ARCHIVE STATUS
            <strong> PRESERVED</strong>
          </span>

          <span>
            NIKKE / 05
          </span>

        </div>

      </div>
    </section>
  );
}