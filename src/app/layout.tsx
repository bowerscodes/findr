import type { Metadata } from "next";
import Providers from '../components/Providers';
import TopNav from "@/components/navbar/TopNav";
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
          <TopNav />
          <main className="container mx-auto p-10">
            {children} 
          </main>
        </Providers>
      </body>
    </html>
  );
}
