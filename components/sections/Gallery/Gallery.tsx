import Image from "next/image";
import Link from "next/link";

import arrowRight from "@/public/icons/arrow_right.svg";
import i14pro from "@/public/img/ai14p.jpg";
import i14 from "@/public/img/ai14.jpg";
import i13 from "@/public/img/ai13.jpg";
import i12 from "@/public/img/ai12.jpg";

import styles from "./Gallery.module.scss";
import {GalleryDetailBtn} from "@/components/elements/Gallery/GalleryDetailBtn/GalleryDetailBtn";
import {GalleryList} from "@/components/elements/Gallery/GalleryList/GalleryList";

const fakeData = [
  {
    name: "iPhone 14 Pro",
    price: "999",
    img: i14pro,
    id: "ff3sd1fs2df132s",
  },
  {
    name: "iPhone 14",
    price: "799",
    img: i14,
    id: "ff3styfs2df132s",
  },
  {
    name: "iPhone 13",
    price: "599",
    img: i13,
    id: "ff3sd1fsdrf132s",
  },
  {
    name: "iPhone 12",
    price: "599",
    img: i12,
    id: "ff3sd1fsdrf13fs",
  },
];

export const Gallery = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section_bg}>
        <div className="container">
          <div className={styles.gallery__header}>
            <h2 className={styles.title}>
              Get Your <span className={styles.title_iphone}>iPhone</span>
            </h2>
            <Link href="" className={styles.gallery__link_box}>
              <span className={styles.all__btn}>See All</span>
              <Image src={arrowRight} alt="arrow" width={24} height={24} />
            </Link>
          </div>

          <GalleryList data={fakeData} />
        </div>
      </div>
    </section>
  );
};
