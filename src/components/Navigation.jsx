import { useEffect, useState } from "react";
import personalData from "../data/personalData";
import "./Navigation.css";

export default function Navigation() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = personalData.navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (id) => {
    setOpen(false);

    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`nav ${
        scrolled ? "nav--scrolled" : ""
      }`}
    >
      <div className="nav__inner container">

        {/* BRAND */}
        <button
          className="nav__brand"
          onClick={() => handleClick("home")}
          aria-label="Go to Home"
        >
          <span className="nav__brand-dot" />
          <span className="nav__brand-name">
            Nikhil Devaraj
          </span>
        </button>


        {/* DESKTOP NAVIGATION */}
        <nav
          className="nav__links"
          aria-label="Primary navigation"
        >
          {personalData.navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`nav__link ${
                active === item.id
                  ? "nav__link--active"
                  : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>


        {/* MOBILE MENU BUTTON */}
        <button
          className={`nav__hamburger ${
            open ? "nav__hamburger--open" : ""
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

      </div>


      {/* MOBILE NAVIGATION */}
      <div
        className={`nav__mobile ${
          open ? "nav__mobile--open" : ""
        }`}
      >
        {personalData.navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`nav__mobile-link ${
              active === item.id
                ? "nav__mobile-link--active"
                : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}