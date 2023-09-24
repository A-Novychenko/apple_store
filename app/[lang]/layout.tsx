import {Header} from "@/components/sections/Header/Header";
import "./../globals.css";
import type {Metadata} from "next";
// import { Inter } from "next/font/google";
import {SFproText} from "@/fonts/font";
import {Locale} from "@/i18n-config";
import {Footer} from "@/components/sections/Footer/Footer";

// const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Apple store",
  description: "Apple Store test task",
};

export default function RootLayout({
  children,
  params: {lang},
}: {
  children: React.ReactNode;
  params: {lang: Locale};
}) {
  return (
    <html lang={`${lang}`}>
      <body className={SFproText.className}>
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
