import Reveal from "../components/Reveal";
import Telemetry from "../components/Telemetry";
import personalData from "../data/personalData";
import "./Contact.css";

export default function Contact() {
  const { instagram, instagramHandle, email, linkedin, github, whatsappNumber, whatsappMessage } =
    personalData.contact;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="contact section">
      <div className="container contact__inner">
        <Reveal variant="up">
          <Telemetry>PIT LANE OPEN</Telemetry>
          <h2 className="section-title contact__title">Enter The Garage</h2>
          <p className="section-lede">
            Got something to say, a shared love for cars, or just want to connect? Reach out below.
          </p>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary contact__whatsapp">
            Message Me on WhatsApp
          </a>
        </Reveal>

        <Reveal variant="up" delay={160}>
          <div className="contact__links">
            <a href={`mailto:${email}`} className="btn">
              Email Me
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn">
              LinkedIn
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="btn">
              Instagram
            </a>
            {/* CHANGE YOUR GITHUB HERE — src/data/personalData.js -> contact.github */}
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn">
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal variant="up" delay={220}>
          <div className="contact__meta">
            <span>{instagramHandle}</span>
            <span className="hero__meta-divider" />
            <span>{email}</span>
          </div>
        </Reveal>

        <footer className="contact__footer">
          <span>
            © {new Date().getFullYear()} {personalData.name} — {personalData.siteTitle}
          </span>
        </footer>
      </div>
    </section>
  );
}
