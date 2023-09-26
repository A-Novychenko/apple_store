"use client";

import Image from "next/image";

import searcIcon from "@/public/icons/search.svg";

import styles from "./HeaderSearch.module.scss";

export const HeaderSearch = () => {
  return (
    <div className={styles.input__wrap}>
      <div className={styles.searchBtn_position}>
        <input className={styles.input} placeholder="Search" />
        <button className={styles.search_button}>
          <Image src={searcIcon} alt="Search icon" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};
