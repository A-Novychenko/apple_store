"use client";

import Image from "next/image";

import profileIcon from "@/public/icons/person.svg";

import styles from "./ProfileBtn.module.scss";

export const ProfileBtn = () => {
  return (
    <div className={styles.btn__wrap}>
      <button className={styles.btn}>
        <Image src={profileIcon} alt="profile icon" width={24} height={24} />
      </button>
    </div>
  );
};
