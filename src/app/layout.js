import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const GeneralSans = localFont({
  src: [
    {
      path: "./fonts/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Bilal Arief",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeneralSans.className}>
      <body>{children}</body>
    </html>
  );
}
