import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "League of Legends App",
  description: "Champions information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
