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
      <body className="bg-black">
        <div className="fixed pointer-events-none overflow-hidden size-full bg-position-[-100px_-100px] bg-radial from-green-950 to-transparent"></div>
        <div className="fixed pointer-events-none overflow-hidden size-full bg-position-[100px_100px] bg-radial from-blue-950 to-transparent"></div>
        <div className="fixed pointer-events-none overflow-hidden size-full bg-grid"></div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
