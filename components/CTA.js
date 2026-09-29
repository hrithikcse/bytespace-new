import Link from "next/link";
import SectionTitle from "./SectionTitle";
export default function CTA() {
  return (<section className="grid-bg px-6 py-20 text-center text-white">
    <SectionTitle light title="Unlock Your Potential as a Creator with ByteSpace" text="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators." />
    <Link href="/signup" className="mt-8 inline-block rounded-full bg-lime px-5 py-2 text-sm font-medium text-black">Join as Creator</Link>
  </section>);
}