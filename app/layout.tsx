import type { Metadata } from "next";

export const metadata: Metadata = {
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

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
