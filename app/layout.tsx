import { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Insaf Bin Farsan",
  description:
    "I am a Full Stack Developer who loves to build applications that actually solves problems",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en">
      <body className="bg-mist-950 text-mist-50">{children}</body>
    </html>
  );
};

export default RootLayout;
