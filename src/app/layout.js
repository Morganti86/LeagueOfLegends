import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "League of Legends Information App",
  description:
    "The Ultimate League of Legends Champions Resource: Discover Information and Guides for Every Champion in the Game!",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        <Header />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
