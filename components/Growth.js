import Image from "next/image";
const stats = [["12K","Students"],["70+","Courses"],["16","Creators"]];
const checks = ["Share Your Expertise","Monetize Your Passion","Flexibility and Autonomy","Build a Community"];
export default function Growth() {
  return (<section id="creators" className="bg-gradient-to-b from-lime/20 via-white to-blue/10 px-6 py-20"><div className="mx-auto max-w-6xl space-y-24">
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div><h2 className="text-3xl font-semibold">Your Path to Professional Growth Starts Here!</h2>
        <p className="mt-6 text-sm text-gray-500">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
        <div className="mt-8 flex gap-10">{stats.map(([n, l]) => <div key={l}><p className="text-2xl font-semibold text-blue">{n}</p><p className="text-xs text-gray-500">{l}</p></div>)}</div></div>
      <div className="relative h-96">
        <Image src="/growth1.png" alt="Learning progress" fill sizes="(max-width:768px) 100vw, 50vw" className="object-contain" />
      </div>
    </div>
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div className="relative order-2 h-96 md:order-1">
        <Image src="/growth2.png" alt="Creator dashboard" fill sizes="(max-width:768px) 100vw, 50vw" className="object-contain" />
      </div>
      <div className="order-1 md:order-2"><h2 className="text-3xl font-semibold">Create &amp; Manage Courses Easily.</h2>
        <p className="mt-4 text-sm text-gray-500"><b>ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
        <ul className="mt-6 space-y-2 text-sm">{checks.map((c) => <li key={c}><span className="mr-2 text-blue">✔</span>{c}</li>)}</ul></div>
    </div>
  </div></section>);
}