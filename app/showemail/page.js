"use client";

import { useEmail } from "@/context/EmailContext";

export default function ShowEmailPage() {
  const { email } = useEmail();

  return (
    <div className="bg-black flex gap-4 flex-col  items-center justify-center p-4 text-white">
      <h1>Submitted Email</h1>
      <p>{email ? `The submitted email is: ${email}` : "No email submitted"}</p>
    </div>
  );
}
