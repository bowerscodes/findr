import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from '../components/Providers';
import TopNav from "@/components/navbar/TopNav";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

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
      <body className={roboto.className}>
        <Providers>
          <TopNav />
          <main className="container mx-auto">
            {children} 
          </main>
        </Providers>
      </body>
    </html>
  );
}
