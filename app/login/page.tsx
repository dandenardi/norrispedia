"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

//example of dummy users. It could be replaced by a database
const users: Record<string, string> = {
  norris: "roundhouse",
  daniel: "1234",
};

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    if (users[username] && users[username] === password) {
      document.cookie = `auth=${username}; path=/`;
      const redirect =
        searchParams?.get("redirect") || `/norris-club/${username}`;
      if (typeof window !== "undefined") {
        router.push(redirect);
      }
    } else {
      setError("Usuário ou senha inválidos (Chuck está de olho 👀)");
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">
        Bem-vindo ao NorrisClub!
      </h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-full max-w-sm"
      >
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border rounded-lg"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition duration-200"
        >
          Entrar
        </button>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </form>
    </main>
  );
}
