/**
 * Decorative racing-telemetry style label (e.g. "SYSTEM ONLINE", "SECTOR 1").
 * Purely visual — not connected to real data. See README for how it's used.
 */
export default function Telemetry({ children }) {
  return (
    <span className="telemetry">
      <span className="dot" aria-hidden="true" />
      {children}
    </span>
  );
}
