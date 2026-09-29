import Image from "next/image";
import Button from "./Button";
export default function Hero() {
  return (<section className="grid-bg overflow-hidden px-6 pt-32 text-center text-white">
    <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Get Access to Hundreds Courses Available</h1>
    <p className="mx-auto mt-6 max-w-xl text-xs text-white/80">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
    <div className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-full bg-white p-1.5">
      <input className="flex-1 rounded-full px-4 py-1.5 text-sm text-gray-800 outline-none" placeholder="Course, topic, creator" />
      <Button>Search</Button>
    </div>
    <div className="relative mx-auto mt-10 h-[420px] max-w-2xl">
      <div className="absolute inset-x-0 bottom-[-30%] mx-auto h-[420px] w-[420px] rounded-full bg-lime" />
      <div className="absolute bottom-0 left-1/2 h-[420px] w-72 -translate-x-1/2 overflow-hidden rounded-t-3xl">
        <Image src="/hero.png" alt="Student learning" fill sizes="320px" className="object-cover object-top" priority />
      </div>
      <div className="absolute right-0 top-10 rounded-xl bg-white p-3 text-left text-black"><p className="text-[10px] text-gray-500">Learning Progress</p><p className="text-2xl font-semibold">55%</p></div>
      <div className="absolute left-0 top-6 rounded-xl bg-white p-3 text-left text-xs text-black">UI/UX Design</div>
    </div>
  </section>);
}