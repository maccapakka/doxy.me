import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  description: "Doxy design system test",
  title: "Doxy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
