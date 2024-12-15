export default function Button({ text, rightIcon, leftIcon, className }) {
  return (
    <button
      type="submit"
      className={`btn ${className}`}
      id="btnsubmit"
      disabled
    >
      <span className="btn-icon-left">{leftIcon}</span>
      <span>{text}</span>
      <span className="btn-icon-right">{rightIcon}</span>
    </button>
  );
}
