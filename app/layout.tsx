import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "VibeMatch - Social Music Game",
  description: "Guess the tune, earn rewards, and flaunt your music taste on Base.",
  openGraph: {
    title: "VibeMatch",
    description: "Guess the tune, earn rewards, and flaunt your music taste on Base.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
