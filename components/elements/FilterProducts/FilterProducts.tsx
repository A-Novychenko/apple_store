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
  return (
    <ul className={styles.products__filters_list}>
      {btns &&
        btns.map((el, i) => (
          <li key={i}>
            <button className={styles.btn}>{el}</button>
          </li>
        ))}
    </ul>
  );
};
