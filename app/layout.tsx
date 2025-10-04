import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Aspiring PMs — Jobs & Internships",
  description: "Find PM jobs and internships. Apply directly. Built for Aspiring PMs.",
  metadataBase: new URL("https://aspiringpmjobs.com"),
  openGraph: { images: ["/og.png"] }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container py-8">{children}</main>
      </body>
    </html>
  );
}
