import type { Metadata } from "next";
import { Links } from "./Links";
import { CurrentPagePath } from "./CurrentPagePath";

export function generateMetadata(): Metadata {
  return {
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      },
    },
  };
}


export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <CurrentPagePath/>
        <Links />
        {children}
      </body>
    </html>
  )
}
