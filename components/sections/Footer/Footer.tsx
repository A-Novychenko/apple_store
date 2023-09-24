import LocaleSwitcher from "@/components/elements/LocalSwitcher/LocalSwitcher";
import {getDictionary} from "@/getDictionary";
import {Locale} from "@/i18n-config";
import Link from "next/link";

export const Footer = async ({lang}: {lang: Locale}) => {
  const dictionary = await getDictionary(lang);
  return (
    <footer>
      <LocaleSwitcher />
    </footer>
  );
};
