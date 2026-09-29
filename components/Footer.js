import Button from "./Button";
const cols = [["Featured Courses","Featured Categories","Business","IT","Design"],["Development","Marketing","Photography","Finance","Sport"],["Become a Creator","Affiliate Program","Contact","Help","About"]];
export default function Footer() {
  return (<footer className="mx-auto max-w-6xl px-6 py-14">
    <div className="grid gap-10 md:grid-cols-2">
      <div><p className="text-lg font-bold"><span className="text-blue">b</span> ByteSpace</p>
        <p className="mt-2 text-xs text-gray-500">Stay up to date with our latest features and releases by joining our newsletter.</p>
        <div className="mt-4 flex max-w-sm gap-2"><input className="flex-1 rounded-full border px-4 py-2 text-sm" placeholder="Enter your email" /><Button>Search</Button></div></div>
      <div className="grid grid-cols-3 gap-4 text-xs text-gray-600">{cols.map((c, i) => <ul key={i} className="space-y-3">{c.map((l) => <li key={l}>{l}</li>)}</ul>)}</div>
    </div>
    <div className="mt-16 flex justify-between border-t pt-4 text-[10px] text-gray-500"><span>© 2023 ByteSpace. All rights reserved.</span><span>Privacy Policy · Terms of Service · Cookies Settings</span></div>
  </footer>);
}
