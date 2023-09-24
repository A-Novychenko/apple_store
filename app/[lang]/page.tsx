import {getDictionary} from "@/getDictionary";
import {Locale} from "../../i18n-config";
import {Hero} from "@/components/sections/Hero/Hero";

export default async function Home({params: {lang}}: {params: {lang: Locale}}) {
  const dictionary = await getDictionary(lang);
  getDictionary;

  return (
    <>
      <h1 className="visually-hidden">Apple store</h1>

      <Hero />
    </>
  );
}
