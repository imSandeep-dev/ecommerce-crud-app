function Button({ children, onClick, type = "button", variant = "primary", disabled = false }) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50";
  const variants = {
    primary: "bg-[#d45b3f] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#b94831] hover:shadow-md",
    danger: "bg-[#9f3d3d] text-white hover:bg-[#853333]",
    secondary: "bg-[#e4e8e0] text-[#18302b] hover:bg-[#d5ddd3]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;