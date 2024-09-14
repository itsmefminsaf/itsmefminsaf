import { Metadata } from "next";
import React, { ReactNode, Suspense } from "react";
import "./globals.css";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Insaf | Portfolio | @itsmefminsaf",
  description:
    "Hello there. I am fm insaf a full-stack web developer. I have 4 years of experience in web development",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en">
      <body className="bg-black-600 font-sans text-white">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
