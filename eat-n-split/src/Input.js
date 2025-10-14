export function Input({ value, onChange, children, id, type, disabled }) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
      />
    </>
  );
}
