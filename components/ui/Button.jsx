import Link from "next/link";

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-[#1e3a5f] text-white hover:bg-[#2d5a8a] focus:ring-[#1e3a5f]",
    secondary: "bg-white text-[#1e3a5f] hover:bg-gray-100 focus:ring-gray-300",
    accent: "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500",
    outline:
      "border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white focus:ring-[#1e3a5f]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
