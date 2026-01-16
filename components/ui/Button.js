export default function Button({ children, variant = "primary", ...props }) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",
    ghost:
      "bg-transparent border border-white/20 hover:bg-white/10 text-white",
  };

  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md text-sm transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
