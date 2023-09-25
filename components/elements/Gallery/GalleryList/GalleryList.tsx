import Image from "next/image";
import {GalleryDetailBtn} from "../GalleryDetailBtn/GalleryDetailBtn";

import styles from "./GalleryList.module.scss";

export const GalleryList = ({data}: {data: GalleryListProps}) => {
  return (
    <ul className={styles.gallery__card_list}>
      {data &&
        data.map(({name, id, price, img}) => (
          <li key={id}>
            <div>
              <p>{name}</p>
              <p>{`From $${price}`}</p>
            </div>
            <Image src={img} alt={name} width={264} height={344} />
            <GalleryDetailBtn />
          </li>
        ))}
    </ul>
  );
};
