"use client";

import {useState} from "react";

import styles from "./FilterProducts.module.scss";

const btns = [
  "All Products",
  "Iphone",
  "Ipad",
  "Mac",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessory",
];

export const FilterProducts = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <ul className={styles.products__filters_list}>
      {btns &&
        btns.map((el, i) => (
          <li key={i}>
            <button
              className={isActive === i ? styles.btn_active : styles.btn}
              onClick={() => {
                setIsActive(i);
              }}
            >
              {el}
            </button>
          </li>
        ))}
    </ul>
  );
};
