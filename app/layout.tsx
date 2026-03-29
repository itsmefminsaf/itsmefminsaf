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
      <body className="flex flex-col items-center gap-3 bg-neutral-950 p-3 text-neutral-50">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
