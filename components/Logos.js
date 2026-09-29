export default function Logos() {
  return (<section className="bg-gray2 py-10"><div className="mx-auto flex max-w-5xl flex-wrap items-center justify-around gap-6 px-6 text-gray-500">
    {Array.from({ length: 5 }).map((_, i) => <span key={i} className="font-semibold">◎ Logoipsum</span>)}
  </div></section>);
}
