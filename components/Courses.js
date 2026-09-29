"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import CourseCard from "./CourseCard";
const tags = ["Featured","Music","Drawing & Painting","Marketing","Animation","Social Media","UI/UX Design","Creative Marketing","Digital Illustration","Film & Video","Crafts","Freelance & Entrepreneurship","Graphic Design","Photography","Productivity","Web Development","Data Science","Cooking","+ More"];
const courses = [
  { title: "Learn Figma from Basic", image: "/courses/c1.png", tags: ["UI/UX Design","Graphic Design"] },
  { title: "Build Digital Asset", image: "/courses/c2.png", tags: ["Digital Illustration","Graphic Design"] },
  { title: "the Power of Big Data", image: "/courses/c3.png", tags: ["Data Science"] },
  { title: "Balancing Productivity and Life", image: "/courses/c4.png", tags: ["Productivity"] },
  { title: "Mastering Money Management", image: "/courses/c5.png", tags: ["Freelance & Entrepreneurship"] },
  { title: "From Idea to Startup Success", image: "/courses/c6.png", tags: ["Freelance & Entrepreneurship","Marketing"] },
];
export default function Courses() {
  const [active, setActive] = useState("Featured");
  const list = active === "Featured" || active === "+ More" ? courses : courses.filter((c) => c.tags.includes(active));
  return (<section id="courses" className="mx-auto max-w-6xl px-6 py-20">
    <SectionTitle title="Discover Your Passion, Build Your Skills" text="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life." />
    <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
      {tags.map((t) => (
        <button key={t} onClick={() => setActive(t)} className={`rounded-full px-3 py-1 text-xs transition ${active === t ? "bg-lime" : "bg-gray2 hover:bg-lime/50"}`}>{t}</button>
      ))}
    </div>
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((c) => <CourseCard key={c.title} title={c.title} image={c.image} />)}
    </div>
    {list.length === 0 && <p className="mt-12 text-center text-sm text-gray-500">No courses in this category yet.</p>}
  </section>);
}