import Image from "next/image";
import Link from "next/link";

import arrowRight from "@/public/icons/arrow_right.svg";
import i14pro from "@/public/img/i14pro.jpg";
import i14 from "@/public/img/i14.jpg";
import i13 from "@/public/img/i13.jpg";

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
];

export const Gallery = () => {
  return (
    <section>
      <div className={styles.gallery__header}>
        <h2>Get Your iPhone</h2>
        <Link href="" className={styles.gallery__link_box}>
          <span>See All</span>
          <Image src={arrowRight} alt="arrow" width={24} height={24} />
        </Link>
      </div>

      <GalleryList data={fakeData} />
    </section>
  );
};
