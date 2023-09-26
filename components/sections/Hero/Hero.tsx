import Image from "next/image";

import {PreOrderBtn} from "@/components/elements/PreOrderBtn/PreOrderBtn";
import decorIcon from "@/public/icons/Union.svg";
import decorLastIcon from "@/public/icons/Union_last.svg";

import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.content__box}>
            <h2>
              <span className={styles.title}>
                Elevating Life
                <span className={styles.decoration_first_title_bgc}>
                  <span className={styles.decoration_first_title_icon}>
                    <Image
                      src={decorIcon}
                      alt="icon"
                      width={193}
                      height={57}
                      className={styles.bgcIcon}
                    />
                  </span>
                </span>
              </span>

              <span className={styles.title}>to Pro-Level Precision</span>
              <span className={styles.title}>
                <span className={styles.decoration_last_title_bgc}>
                  <span className={styles.decoration_last_title_icon}>
                    <Image
                      src={decorLastIcon}
                      alt="icon"
                      width={151}
                      height={57}
                      className={styles.bgcIcon_last}
                    />
                  </span>
                </span>
                with Vision Pro
              </span>
            </h2>
            <p className={styles.descr}>
              With Vision Pro, you have an infinite canvas that transforms how
              you use the apps you love. Arrange apps anywhere and scale them to
              the perfect size, making the workspace of your dreams a reality —
              all while staying present in the world around you
            </p>
            <PreOrderBtn />
          </div>
        </div>
      </div>
    </section>
  );
};
