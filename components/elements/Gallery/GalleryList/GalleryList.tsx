import Image from "next/image";

import {GalleryDetailBtn} from "../GalleryDetailBtn/GalleryDetailBtn";

import i14pro from "@/public/img/ai14p.jpg";
import i14 from "@/public/img/ai14.jpg";
import i13 from "@/public/img/ai13.jpg";
import i12 from "@/public/img/ai12.jpg";

import styles from "./GalleryList.module.scss";

const IMG_DATA: any = {i14pro, i14, i13, i12};

export const GalleryList = ({data}: {data: GalleryListProps}) => {
  return (
    <ul className={styles.gallery__card_list}>
      {data &&
        data.map(({name, id, price, img}) => (
          <li key={id}>
            <div className={styles.img_wrap}>
              <Image
                src={IMG_DATA[img] || img}
                alt={name}
                width={264}
                height={344}
                className={styles.img}
              />
              <div className={styles.label}>
                <p className={styles.name}>{name}</p>
                <p className={styles.price}>{`From $${price}`}</p>
              </div>
              <GalleryDetailBtn />
            </div>
          </li>
        ))}
    </ul>
  );
};
