import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "/nested",
    description: "desc",
    authors: {
      name: "grzegorz",
      url: "https://linkedin.com/in/grzegorz-pokorski",
    },
  };
}

export default function Page() {
  return (
    <div>
      <h1>current: /nested</h1>
      <Link href="/">Link to / page</Link>
      <br />
      <Link href="/nested/route">Link to /nested/route page</Link>
    </div>
  );
}
