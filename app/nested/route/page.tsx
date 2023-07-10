import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "/nested/route",
    description: "desc",
    authors: {
      name: "grzegorz",
      url: "https://linkedin.com/in/grzegorz-pokorski",
    },
  };
}

export default function Page() {
  return <></>;
}
