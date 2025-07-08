import type { Metadata } from "next";
import Providers from '../components/Providers';
import "./globals.css";

export const metadata: Metadata = {
  title: "Findr",
  description: "Findr - Your dating assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
