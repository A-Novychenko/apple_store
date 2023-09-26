import {FilterProducts} from "@/components/elements/FilterProducts/FilterProducts";
import {GalleryList} from "@/components/elements/Gallery/GalleryList/GalleryList";

import aw from "@/public/img/aw.jpg";
import ma15 from "@/public/img/ma15.jpg";
import i12 from "@/public/img/ai12.jpg";
import ai3 from "@/public/img/ai3.jpg";
import hp from "@/public/img/hp.jpg";
import i13 from "@/public/img/ai13.jpg";
import at from "@/public/img/at.jpg";
import apdp from "@/public/img/apdp.jpg";
import {title} from "process";

import styles from "./Products.module.scss";

const data = [
  {
    name: "Apple Watch",
    price: "399",
    img: aw,
    id: "ff3s81fs2df132s",
  },
  {
    name: "MacBook Air 15",
    price: "1299",
    img: ma15,
    id: "ff3s77fs2df132s",
  },
  {
    name: "iPhone 12",
    price: "599",
    img: i12,
    id: "ff3sd5gsdrf13fs",
  },
  {
    name: "AirPods 3rd Gen",
    price: "179",
    img: ai3,
    id: "ff3sd1fs2df132s",
  },

  {
    name: "HomePod",
    price: "299",
    img: hp,
    id: "ff3styropdf132s",
  },
  {
    name: "iPhone 13",
    price: "599",
    img: i13,
    id: "ff3sd1qwdrf132s",
  },
  {
    name: "Apple TV 4K",
    price: "129",
    img: at,
    id: "ff3sd1frrdf111s",
  },
  {
    name: "iPad Pro",
    price: "749",
    img: apdp,
    id: "ff3styww2df122s",
  },
];

export const Products = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section_bg}>
        <div className="container">
          <h2 className={styles.title}>
            Explore in <span className={styles.title_strong}>Products</span>
          </h2>

          <FilterProducts />
          <GalleryList data={data} />
        </div>
      </div>
    </section>
  );
};
