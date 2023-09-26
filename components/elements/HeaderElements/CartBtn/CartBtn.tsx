"use client";

import Image from "next/image";

import cartIcon from "@/public/icons/bag.svg";

import styles from "./CartBtn.module.scss";

export const CartBtn = () => {
  return (
    <button className={styles.btn}>
      <Image src={cartIcon} alt="profile icon" width={24} height={24} />
    </button>
  );
};
