"use client";

import { useEffect, useState } from "react";
import ChuckCard from "@/components/ChuckCard";

export default function ChuckPage() {
  const [fact, setFact] = useState("");

  async function getRandomFact() {
    try {
      const response = await fetch("/api/joke");
      const data = await response.json();
      setFact(data.value);
    } catch (error) {
      console.error(
        "Could not fetch a new fact (maybe Chuck Norris thinks you shouldn't...",
        error
      );
    }
  }

  useEffect(() => {
    getRandomFact();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      <h1 className="text-3xl font-bold text-center text-orange-600">
        Fatos do Chuck Norris!
      </h1>
      <ChuckCard fact={fact} onNewFact={getRandomFact} />
    </main>
  );
}
