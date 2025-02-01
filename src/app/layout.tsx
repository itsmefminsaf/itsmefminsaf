import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Insaf Mohamed | Full stack developer and Graphic designer | @itsmefminsaf",
  description:
    "Hello there, I am Insaf, a full stack developer and a graphic designer. I can develop modern, functional nad responsive full-stack website. During my development of website, I use modern technologies like Next.js, TailwindCSS, Motion and so.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-roboto">
        {children}
      </body>
    </html>
  );
}
