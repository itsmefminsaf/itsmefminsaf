import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fm Insaf | Next.js developer",
  description:
    "Hello there, I am a full stack web developer. I create modern sleek responsive websites using Next.js",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
