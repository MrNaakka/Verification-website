import "./globals.css";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={`${geist.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body><ThemeProvider attribute="class">{children}</ThemeProvider></body>
    </html>
  );
}
