"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function NorrisClubPage() {
  const { username } = useParams();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const userCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user="))
      ?.split("=")[1];

    if (userCookie === username) {
      setIsAuthorized(true);
    } else {
      router.push("/login");
    }
  }, [username, router]);

  if (!isAuthorized) return null;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">
        Bem-vindo ao NorrisClub, {username}!
      </h1>
      <p className="mt-6 text-lg max-w-xl text-center">
        Aqui só entram os fãs <i>hardcore</i>. Chuck Norris aprova!
        <img
          src="https://i.pinimg.com/736x/13/f4/09/13f4093020fc96ba87eae8221d071af7.jpg"
          alt="Chuck Norris seal of approvement"
        />
      </p>
    </main>
  );
}
