import Image from "next/image";
import Link from "next/link";

import {getDictionary} from "@/getDictionary";
import {Locale} from "@/i18n-config";
import logoIcon from "@/public/icons/logo.svg";
import {HeaderSearch} from "@/components/elements/HeaderElements/HeaderSearch/HeaderSearch";
import {ProfileBtn} from "@/components/elements/HeaderElements/ProfileBtn/ProfileBtn";
import {CartBtn} from "@/components/elements/HeaderElements/CartBtn/CartBtn";

import styles from "./Header.module.scss";

export const Header = async ({lang}: {lang: Locale}) => {
  const dictionary = await getDictionary(lang);
  return (
    <header>
      <div className={styles.wrap}>
        <nav>
          <ul className={styles.nav__list}>
            <li>
              <Link href={`/${lang}`}>
                {dictionary["server-component"].header.links.home}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}`}>
                {dictionary["server-component"].header.links.products}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}`}>
                {dictionary["server-component"].header.links.entertainment}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}`}>
                {dictionary["server-component"].header.links.support}
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Image
            src={logoIcon}
            alt={lang === "uk" ? "Логотип 'apple'" : "Logo 'apple'"}
            width={48}
            height={48}
          />
        </div>
        <HeaderSearch />

        <div>
          <CartBtn />
          <ProfileBtn />
        </div>
      </div>
    </header>
  );
};