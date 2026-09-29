"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
export default function AuthForm({ mode }) {
  const signup = mode === "signup";
  const [v, setV] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (signup && !v.name.trim()) return setErr("Full name is required");
    if (!/\S+@\S+\.\S+/.test(v.email)) return setErr("Enter a valid email");
    if (v.password.length < 6) return setErr("Password must be at least 6 characters");
    setErr(""); alert(signup ? "Account created (demo)" : "Signed in (demo)");
  };
  const f = (k) => ({ value: v[k], onChange: (e) => setV({ ...v, [k]: e.target.value }), className: "w-full rounded-lg border px-3 py-2 text-sm" });
  return (<main className="grid-bg grid min-h-screen place-items-center px-4">
    <form onSubmit={submit} className="w-full max-w-sm space-y-4 rounded-2xl bg-white p-8">
      <h1 className="text-2xl font-semibold">{signup ? "Welcome to ByteSpace" : "Welcome Back"}</h1>
      {signup && <input placeholder="Full Name" {...f("name")} />}
      <input type="email" placeholder="designer@example.com" {...f("email")} />
      <input type="password" placeholder="••••••••" {...f("password")} />
      {err && <p className="text-xs text-red-500">{err}</p>}
      <Button type="submit" className="w-full">{signup ? "Sign Up" : "Sign In"}</Button>
      <p className="text-center text-xs text-gray-500">{signup ? "Already have an account?" : "New user?"} <Link className="text-blue" href={signup ? "/login" : "/signup"}>{signup ? "Login" : "Create an account"}</Link></p>
    </form></main>);
}
