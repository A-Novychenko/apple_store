import {PreOrderBtn} from "@/components/elements/PreOrderBtn/PreOrderBtn";

import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section>
      <div className={styles.content__box}>
        <h2>
          <span>Elevating Life</span>
          <span>to Pro-Level Precision</span>
          <span>with Vision Pro</span>
        </h2>
        <p>
          With Vision Pro, you have an infinite canvas that transforms how you
          use the apps you love. Arrange apps anywhere and scale them to the
          perfect size, making the workspace of your dreams a reality — all
          while staying present in the world around you
        </p>
        <PreOrderBtn />
      </div>
    </section>
  );
};
