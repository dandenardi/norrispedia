"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-4 bg-orange-600 text-white">
      <ul className="flex gap-6 text-lg">
        <li>
          <Link href="/" className="hover:underline">
            Início
          </Link>
        </li>
        <li>
          <Link href="/chuck" className="hover:underline">
            Fatos
          </Link>
        </li>
        <li>
          <Link href="/login" className="hover:underline">
            Área de NorrisFãs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
