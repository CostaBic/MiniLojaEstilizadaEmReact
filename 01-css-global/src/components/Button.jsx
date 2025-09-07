import React from "react";

export default function Button({ children, variant = "solid", onClick, disabled=false, loading=false, ariaLabel }) {
  const className = `btn btn--${variant}`;
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading ? "true" : "false"}
    >
      {loading ? <span className="skeleton" style={{width:16, height:16, borderRadius:4}} aria-hidden="true"></span> : null}
      <span>{children}</span>
    </button>
  );
}
