import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Insaf Mohamed | Full stack developer and Graphic designer @itsmefminsaf",
  description:
    "Hello there, I am Insaf, a full stack developer and a graphic designer. I am experienced in building SEO friendly responsive full stack web applications with modern UI.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
