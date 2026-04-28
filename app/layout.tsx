import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Britannia Distributor Bangalore | Kishore Marketing",
  description:
    "Wholesale Britannia biscuits supplier in Bangalore. Fast delivery and best price for retailers.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}