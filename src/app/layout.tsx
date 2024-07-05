import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '../utils/fontawesome';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '../styles/globals.css';
import { cn } from "@/lib/utils";


config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mentor.AI',
  description:
    'Mentor.ai personalized roadmaps guiding your tech journey, one step at a time.',
};

/**
 * RootLayout Component
 *
 * The root layout of the application, including head meta tags and global styles.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The children components to be rendered inside the layout.
 * @returns {JSX.Element} A JSX element representing the root layout.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={cn("flex flex-col",inter.className)}>
        {children}
      </body>
    </html>
  );
}
