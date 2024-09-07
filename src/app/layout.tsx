import { Metadata } from "next";
import React, { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Insaf | Portfolio | @itsmefminsaf",
  description:
    "Hello there. I am fm insaf a full-stack web developer. I have 4 years of experience in web development",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en">
      <body className="bg-bg font-sans text-primary">{children}</body>
    </html>
  );
};

export default RootLayout;
