import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denuke Dissanayake | Software Engineer",
  description: "Software Engineer specializing in JavaScript, TypeScript, Java, Scala, and Python. Experienced in React, Next.js, and mobile development with React Native and Flutter.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Sri Lanka"],
  authors: [{ name: "Denuke Dissanayake" }],
  openGraph: {
    title: "Denuke Dissanayake | Software Engineer",
    description: "Passionate software engineer turning ideas into reality through code",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denuke Dissanayake | Software Engineer",
    description: "Passionate software engineer turning ideas into reality through code",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-brand-white2">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
