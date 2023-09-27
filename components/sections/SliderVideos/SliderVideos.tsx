"use client";

import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";

import playIcon from "@/public/icons/play_circle.svg";

import "swiper/scss";

import styles from "./SliderVideos.module.scss";

const data = [
  {
    id: "d3s2f1dww32f1",
    name: "Silo",
    img: "https://m.media-amazon.com/images/M/MV5BNTk3MGJkZGItNzRjYy00MDhiLWExMjUtOWU2Njc3YWRmOWE3XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    url: "https://www.youtube.com/watch?v=b6qSGKN42Gc",
    genre: "Thriller",
  },
  {
    id: "d3s2f1eed32f2",
    name: "Platonic",
    img: "https://flxt.tmsimg.com/assets/p24397341_b_h8_ab.jpg",
    url: "https://www.youtube.com/watch?v=wxhhbGj_TPs",
    genre: "Comedy",
  },
  {
    id: "d3s2frt1d32f3",
    name: "HIJACK",
    img: "https://www.telegraph.co.uk/content/dam/tv/2023/07/19/TELEMMGLPICT000340000852_16897825756340_trans_NvBQzQNjv4BqIwa83j0hzDEjtjMPhBXPCHSFJkRLhAlarA5CDiEErnI.jpeg?imwidth=680",
    url: "https://www.youtube.com/watch?v=WxwKzsklvJo",
    genre: "Thriller",
  },
  {
    id: "d3s2f1lod32f4",
    name: "The Crodwen Room",
    img: "https://www.pennlive.com/resizer/X6drov9DalU4uLAKrIKy7Mo5kgM=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/G52H63OSLBHRHACUCZ75ZW4UJU.jpg",
    url: "https://www.youtube.com/watch?v=6i8XKgQfbK0",
    genre: "Thriller",
  },
  {
    id: "d3s2fjk1d32f5",
    name: "Swagger",
    img: "https://m.media-amazon.com/images/M/MV5BODI1ZDc5OTMtZTUyOC00YWNlLWI4NWEtMWRjYzFlZmQwMDM4XkEyXkFqcGdeQXVyMjMxMTk4MDU@._V1_.jpg",
    url: "https://www.youtube.com/watch?v=87A_aLJOY4g",
    genre: "Thriller",
  },
  {
    id: "d3s2f1dgd32f6",
    name: "AppleTV",
    img: "https://applepro.news/wp-content/uploads/2022/03/apple-tv-anonsiruet-pervyj-originalnyj-serial-na-ispanskom-yazyke.jpg",
    url: "https://www.youtube.com/watch?v=6i8XKgQfbK0",
    genre: "Thriller",
  },
  {
    id: "d3s2f1ddf32f7",
    name: "AppleTV",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8cykuBx7Oeq5JzeVcsLOQRPsF-1FCW93rlbriPjUgKzGYNjHjTAPKBJRiGuvzcXgvzM&usqp=CAU",
    url: "https://www.youtube.com/watch?v=6i8XKgQfbK0",
    genre: "Thriller",
  },
];

export const SliderVideos = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Swiper
          // slidesPerView={5}
          initialSlide={2}
          spaceBetween={24}
          centeredSlides
          edgeSwipeThreshold={0}
          grabCursor
          resistance={false}
          slideToClickedSlide
          breakpoints={{0: {slidesPerView: 1}, 1440: {slidesPerView: 5}}}
        >
          {data &&
            data.map(({id, name, img, url, genre}) => (
              <SwiperSlide key={id}>
                {({isActive}) => (
                  <div
                    style={{width: isActive ? "872px !important" : "88px"}}
                    className={`swiper-slide ${
                      isActive
                        ? "active_slide_custom"
                        : "not_active_slide_custom"
                    }`}
                  >
                    <Image
                      src={`${img}`}
                      alt={name}
                      width={isActive ? 872 : 88}
                      height={480}
                      className={isActive ? styles.img__active : styles.img}
                    />
                    {isActive && (
                      <div className={styles.name_box}>
                        <p className={styles.name}>{name}</p>
                        <div>
                          <p className={styles.genre}>{genre}</p>
                        </div>
                      </div>
                    )}
                    {!isActive && (
                      <div className={styles.name_vertical_wrap}>
                        <p className={styles.name_vertical}>{name}</p>
                      </div>
                    )}
                    {isActive && (
                      <div className={styles.link_wrap}>
                        <Link href={url} className={styles.link}>
                          <span className={styles.btn_text}>stream Now</span>
                          <Image
                            src={playIcon}
                            alt="play icon"
                            width={24}
                            height={24}
                          />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                {/* </div> */}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};
