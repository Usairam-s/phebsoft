"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEmail } from "../context/EmailContext";
import toast from "react-hot-toast";

export default function HomePage() {
  const [email, setEmailInput] = useState("");
  const { setEmail } = useEmail();
  const router = useRouter();

  const handleSubmit = (e) => {
    if (!email) {
      const toastId = toast.loading("Please provide email...");
    }
    e.preventDefault();
    setEmail(email);
    router.push("/showemail");
  };

  return (
    <div className="bg-black flex flex-col  items-center justify-center p-4">
      <h1 className="text-white text-2xl">Enter Your Email</h1>
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmailInput(e.target.value)}
          placeholder="Enter your email"
          required
          className="p-2 rounded-lg"
        />
        <button className="bg-white text-black my-3 rounded-lg" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
