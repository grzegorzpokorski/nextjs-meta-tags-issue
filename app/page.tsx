import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "/",
    description: "desc",
  };
}

export default function Home() {
  return (
    <div>
      <h1>current: /</h1>
      <Link href="/nested">Link to /nested page</Link>
      <br />
      <Link href="/nested/route">Link to /nested/route page</Link>
    </div>
  );
}
