"use client";
import Image from "next/image";
import {useState} from "react";

import burgerIcon from "@/public/icons/burger.svg";

import styles from "./BuregerBtn.module.scss";
import Link from "next/link";
import {Locale} from "@/i18n-config";

export const BuregerBtn = ({
  dictionary,
  lang,
}: {
  dictionary: Dictionaries;
  lang: Locale;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((s) => !s);
  };

  const closeMenu = (e: any) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button className={styles.burgerBtn} onClick={toggleMenu}>
        <Image src={burgerIcon} alt="menu" width={24} height={24} />
      </button>
      {isOpen && (
        <div className={styles.mob_menu} onClick={closeMenu}>
          <div className={styles.nav_links_mob} onClick={closeMenu}>
            <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                <li onClick={closeMenu}>
                  <Link href={`/${lang}`} className={styles.link}>
                    {dictionary["server-component"].header.links.home}
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link href={`/${lang}`} className={styles.link}>
                    {dictionary["server-component"].header.links.products}
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link href={`/${lang}`} className={styles.link}>
                    {dictionary["server-component"].header.links.entertainment}
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link href={`/${lang}`} className={styles.link}>
                    {dictionary["server-component"].header.links.support}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
