import {Header} from "@/components/sections/Header/Header";
import type {Metadata} from "next";

import {SFproText} from "@/fonts/font";
import {Locale} from "@/i18n-config";
import {Footer} from "@/components/sections/Footer/Footer";

import "./../globals.css";

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
