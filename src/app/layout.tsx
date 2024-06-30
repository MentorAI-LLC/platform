import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/Header';
import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: 'Mentor.AI',
  description:
    'Mentor.ai personalized roadmaps guiding your tech journey, one step at a time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex flex-col",rubik.className)}>
           <Header />
           {children}
      </body>
    </html>
  );
}
