export function Button({ onClick, children, type }) {
  return (
    <button type={type || "button"} onClick={onClick} className="button">
      {children}
    </button>
  );
}
