import useScrollReveal from "../hooks/useScrollReveal";

/**
 * Wraps children in a scroll-triggered reveal animation.
 * variant: "up" | "left" | "right" | "scale" | "clip"
 * Usage: <Reveal variant="left"><h2>Heading</h2></Reveal>
 */
export default function Reveal({ children, variant = "up", delay = 0, as: Tag = "div", className = "" }) {
  const [ref, visible] = useScrollReveal();
  const variantClass = `reveal-${variant}`;

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
