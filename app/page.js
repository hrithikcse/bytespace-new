import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Courses from "@/components/Courses";
import Paths from "@/components/Paths";
import Growth from "@/components/Growth";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
export default function Home() {
  return (<main><div className="relative"><Navbar /><Hero /></div><Logos /><Courses /><Paths /><Growth /><CTA /><Testimonials /><Footer /></main>);
}
