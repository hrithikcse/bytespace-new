import Image from "next/image";
export default function CourseCard({ title, image, price = "$25" }) {
  return (<div className="rounded-2xl border bg-white p-3 shadow-sm">
    <div className="relative h-36 overflow-hidden rounded-xl bg-gray-200">
      {image && <Image src={image} alt={title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />}
    </div>
    <div className="mt-3 flex justify-between"><h3 className="truncate text-sm font-semibold">{title}</h3><span className="text-xs">4.5 ★</span></div>
    <p className="text-[10px] text-gray-400">by purepixel studio</p>
    <p className="mt-2 text-sm font-semibold text-blue">{price}<span className="text-[10px] font-normal text-gray-400"> /lifetime</span></p>
  </div>);
}