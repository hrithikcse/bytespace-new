export default function SectionTitle({ title, text, light, className = "" }) {
  return (<div className={`mx-auto max-w-3xl text-center ${className}`}>
    <h2 className={`text-3xl font-semibold md:text-4xl ${light ? "text-lime" : ""}`}>{title}</h2>
    {text && <p className={`mt-4 text-sm ${light ? "text-white/80" : "text-gray-500"}`}>{text}</p>}
  </div>);
}
