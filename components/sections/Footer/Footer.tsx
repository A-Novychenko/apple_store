import LocaleSwitcher from "@/components/elements/LocalSwitcher/LocalSwitcher";
import {getDictionary} from "@/getDictionary";
import {Locale} from "@/i18n-config";
import Link from "next/link";

import styles from "./Footer.module.scss";

const links = [
  "Privacy",
  "Policy",
  "Terms of Use",
  "Sales and Refunds",
  "Legal",
  "Site Map",
];

export const Footer = async ({lang}: {lang: Locale}) => {
  const dictionary = await getDictionary(lang);
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrap}>
          <p className={styles.copyright}>
            Copyright © 2023 Apple Inc. All rights reserved.
          </p>
          <ul className={styles.link_list}>
            {links &&
              links.map((el, i) => (
                <li key={i} className={styles.item_link}>
                  <Link href="" className={styles.link}>
                    {el}
                  </Link>
                </li>
              ))}
          </ul>
          <LocaleSwitcher />
        </div>
      </div>
    </footer>
  );
};
