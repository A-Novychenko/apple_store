import Image from "next/image";
import Link from "next/link";

import arrowRight from "@/public/icons/arrow_right.svg";

import styles from "./Gallery.module.scss";
import {GalleryDetailBtn} from "@/components/elements/Gallery/GalleryDetailBtn/GalleryDetailBtn";
import {GalleryList} from "@/components/elements/Gallery/GalleryList/GalleryList";

export const Gallery = async () => {
  const res = await fetch(
    "https://apple-store-delta.vercel.app/api/getgallery/",

    {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    }
  );

  const data = await res.json();

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
          <GalleryList data={data} />
        </div>
      </div>
    </section>
  );
};
