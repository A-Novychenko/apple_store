"use client";

import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";

import {Locale, i18n} from "../../../i18n-config";
import globeIcon from "@/public/icons/globe.svg";

import styles from "./LocaleSwitcher.module.scss";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className={styles.wrap}>
      <Image
        className={styles.icon}
        src={globeIcon}
        alt="icon-line"
        width={20}
        height={20}
        priority
      />
      <ul className={styles.list}>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale} className={styles.item}>
              <Link
                href={redirectedPathName(locale)}
                className={
                  pathName.slice(1, 3) === locale
                    ? styles.active
                    : styles.not_active
                }
              >
                {locale === "uk" ? "ua" : locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
