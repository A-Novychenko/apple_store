import Image from "next/image";
import Link from "next/link";

import {getDictionary} from "@/getDictionary";
import {Locale} from "@/i18n-config";
import logoIcon from "@/public/icons/logo.svg";
import {HeaderSearch} from "@/components/elements/HeaderElements/HeaderSearch/HeaderSearch";
import {ProfileBtn} from "@/components/elements/HeaderElements/ProfileBtn/ProfileBtn";
import {CartBtn} from "@/components/elements/HeaderElements/CartBtn/CartBtn";

import styles from "./Header.module.scss";
import {BuregerBtn} from "@/components/elements/HeaderElements/BuregerBtn/BuregerBtn";

export const Header = async ({lang}: {lang: Locale}) => {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.wrap}>
            <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                <li>
                  <Link href={`/${lang}`} className={styles.link}>
                    {dictionary["server-component"].header.links.home}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}`} className={styles.link}>
                    {dictionary["server-component"].header.links.products}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}`} className={styles.link}>
                    {dictionary["server-component"].header.links.entertainment}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}`} className={styles.link}>
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

            <div className={styles.interactive__box}>
              <HeaderSearch />
              <CartBtn />
              <ProfileBtn />
            </div>
          </div>
        </div>
      </header>
      <div className={styles.header_mob_container}>
        <div className={styles.header_mob}>
          <BuregerBtn dictionary={dictionary} lang={lang} />
          <div className={styles.logo_mob_wrap}>
            <Image
              src={logoIcon}
              alt={lang === "uk" ? "Логотип 'apple'" : "Logo 'apple'"}
              width={48}
              height={48}
            />
          </div>
          <div className={styles.btns_mob}>
            <CartBtn />
            <ProfileBtn />
          </div>
        </div>
        <div className={styles.search_mob_wrap}>
          <HeaderSearch />
        </div>
      </div>
    </>
  );
};
