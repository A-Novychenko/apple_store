import {FilterProducts} from "@/components/elements/FilterProducts/FilterProducts";
import {GalleryList} from "@/components/elements/Gallery/GalleryList/GalleryList";

import i14pro from "@/public/img/i14pro.jpg";
import i14 from "@/public/img/i14.jpg";
import i13 from "@/public/img/i13.jpg";

const data = [
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
    name: "iPhone 14 Pro",
    price: "999",
    img: i14pro,
    id: "ff3sd1fs2df111s",
  },
  {
    name: "iPhone 14",
    price: "799",
    img: i14,
    id: "ff3styfs2df122s",
  },
  {
    name: "iPhone 13",
    price: "599",
    img: i13,
    id: "ff3sd1fsdrf155s",
  },
];

export const Products = () => {
  return (
    <section>
      <h2>Explore in Products</h2>

      <FilterProducts />
      <GalleryList data={data} />
    </section>
  );
};
