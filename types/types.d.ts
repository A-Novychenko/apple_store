type GalleryListProps =
  | {
      name: string;
      price: string;
      img: any;
      id: string;
    }[]
  | [];

type GalleryListItem = {
  name: string;
  price: string;
  img: any;
  id: string;
};
