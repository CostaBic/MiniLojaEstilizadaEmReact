export default function Button({ label, onClick, variant = "solid", disabled }) {
  // Mapeia variantes para classes Tailwind usando tokens CSS vars
  const base =
    "inline-flex items-center gap-2 px-[14px] py-[10px] rounded-[10px] font-semibold cursor-pointer border transition-transform duration-[var(--t)] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none";

  const variants = {
    solid: "bg-[var(--primary)] text-white shadow-[var(--shadow-1)] hover:-translate-y-[2px] hover:shadow-[var(--shadow-2)]",
    outline:
      "bg-transparent text-[var(--text)] border border-[rgba(11,26,43,0.08)] dark:border-[rgba(255,255,255,0.06)]",
    ghost: "bg-transparent text-[var(--primary)]",
  };

  const classes = `${base} ${variants[variant] || ""}`;

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
