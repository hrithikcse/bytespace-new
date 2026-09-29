import Image from "next/image";
const items = [
  ["Sarah M.","Enthusiastic Learner","ByteSpace has transformed my approach to learning. The diverse range of courses exceeded my expectations.","/avatar1.png"],
  ["James L.","Lifelong Learner","I've tried several platforms, and ByteSpace stands out for its vibrant community and variety of courses.","/avatar2.png"],
  ["Alex B.","Inspired Creator","As a creator, ByteSpace has been a game-changer. The Course Editor is user-friendly and the community is incredible.","/avatar3.png"],
];
export default function Testimonials() {
  return (<section className="bg-gradient-to-b from-white to-lime/20 px-6 py-20"><div className="mx-auto max-w-6xl">
    <div className="grid gap-6 md:grid-cols-2"><h2 className="self-end text-3xl font-semibold">Discover What Our Community Is Saying</h2>
      <p className="text-sm text-gray-500">Hear directly from those who have experienced the transformative journey of learning and creating on our platform.</p></div>
    <div className="mt-12 grid gap-6 md:grid-cols-3">{items.map(([n, r, q, img]) => (
      <div key={n} className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-200">
          <Image src={img} alt={n} fill sizes="48px" className="object-cover" />
        </div>
        <p className="mt-3 font-semibold">{n}</p><p className="text-xs text-blue">{r}</p><p className="mt-4 text-sm text-gray-500">"{q}"</p></div>))}</div>
  </div></section>);
}