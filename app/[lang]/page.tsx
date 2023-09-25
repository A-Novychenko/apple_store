import {getDictionary} from "@/getDictionary";
import {Locale} from "../../i18n-config";
import {Hero} from "@/components/sections/Hero/Hero";
import {Gallery} from "@/components/sections/Gallery/Gallery";
import {Products} from "@/components/sections/Products/Products";
import {SliderVideos} from "@/components/sections/SliderVideos/SliderVideos";

export default async function Home({params: {lang}}: {params: {lang: Locale}}) {
  const dictionary = await getDictionary(lang);
  getDictionary;

  return (
    <>
      <h1 className="visually-hidden">Apple store</h1>

      <Hero />
      <Gallery />
      <Products />
      <SliderVideos />
    </>
  );
}
