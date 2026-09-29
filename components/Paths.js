import SectionTitle from "./SectionTitle";
const paths = ["Design","Development","IT & Software","Business","Marketing","Photography"];
export default function Paths() {
  return (<section className="mx-auto max-w-6xl px-6 pb-20">
    <SectionTitle title="Explore Diverse Learning Paths at Bytespace" text="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields." className="[&_h2]:text-2xl" />
    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {paths.map((p) => (<div key={p} className="flex h-28 flex-col items-center justify-center gap-2 rounded-xl border text-sm">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-lime/40">●</span>{p}</div>))}
    </div>
  </section>);
}
