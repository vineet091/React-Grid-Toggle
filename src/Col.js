import "./styles.css";

export default function Col({ value, isFlip }) {
  return <div className={`col ${isFlip ? "flipped" : ""}`}>{value}</div>;
}
