import "./styles.css";

export default function Row({ type, isFlip, children }) {
  return (
    <div className={`row ${type} ${isFlip ? "flipped" : ""}`}>{children}</div>
  );
}
