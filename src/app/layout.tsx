import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insaf | Full stack web developer",
};
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
