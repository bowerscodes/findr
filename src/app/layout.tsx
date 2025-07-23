import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from '../components/Providers';
import TopNav from "@/components/navbar/TopNav";
import "./globals.css";
import { auth } from "@/auth";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Findr",
  description: "Findr - Your dating assistant",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const userId = session?.user?.id || null;
  const profileComplete = session?.user.profileComplete as boolean;

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers userId={userId} profileComplete={profileComplete}>
          <TopNav />
          <main className="container mx-auto">
            {children} 
          </main>
        </Providers>
      </body>
    </html>
  );
};
