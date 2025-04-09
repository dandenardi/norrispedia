import { NextResponse } from "next/server";

// An example of caching. A new joke will only be available after 5 seconds
export async function GET() {
  const res = await fetch("https://api.chucknorris.io/jokes/random", {
    next: { revalidate: 5 },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
