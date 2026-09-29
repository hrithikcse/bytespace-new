export default function Button({ children, variant = "lime", className = "", ...p }) {
  const v = variant === "lime" ? "bg-lime text-black" : "bg-blue text-white";
  return <button className={`rounded-full px-5 py-2 text-sm font-medium ${v} ${className}`} {...p}>{children}</button>;
}
