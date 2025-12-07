import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doxy",
  description: "Doxy design system test",
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
