import Link from "next/link";
export default function Navbar() {
  return (<nav className="absolute inset-x-0 top-0 z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm text-white">
    <Link href="/" className="text-lg font-bold"><span className="text-lime">b</span> ByteSpace</Link>
    <div className="hidden gap-8 md:flex"><a href="#">Home</a><a href="#courses">Courses</a><a href="#creators">Creators</a></div>
    <div className="flex gap-4"><Link href="/login">Sign In</Link><Link href="/signup">Join Us</Link></div>
  </nav>);
}
