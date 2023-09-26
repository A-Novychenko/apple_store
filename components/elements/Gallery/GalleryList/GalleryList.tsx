import Image from "next/image";
import {GalleryDetailBtn} from "../GalleryDetailBtn/GalleryDetailBtn";

import styles from "./GalleryList.module.scss";

export const GalleryList = ({data}: {data: GalleryListProps}) => {
  return (
    <ul className={styles.gallery__card_list}>
      {data &&
        data.map(({name, id, price, img}) => (
          <li key={id}>
            <div className={styles.img_wrap}>
              <Image
                src={img}
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
