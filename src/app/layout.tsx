import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clive and Zyra's Wedding",
  description: "Join us to celebrate!",
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
