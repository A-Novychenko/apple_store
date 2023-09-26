import Link from "next/link";

import styles from "./LinkBar.module.scss";

const links = [
  "Newsroom",
  "Apple Leadership",
  "Career Opportunities",
  "Investor",
  "Ethic & Compliance",
  "Events",
  "Contact Apple",
];

const servicesLinks = [
  {
    title: "Shop & Learn",
    links: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "Vision",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
    group: [],
  },
  {
    title: "Apple Store",
    links: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp ",
      "Apple Store App",
      "Certified Refurbished",
      "Apple Trade In",
      "Financing",
      "Carrier Deals at Apple",
      "Order Status",
      "Shopping Help",
    ],
    group: [],
  },
  {
    title: "",
    links: [],
    group: [
      {
        title: "For Business",
        links: ["Apple and Business", "Shop for Business"],
      },
      {
        title: "For Education",
        links: ["Apple and Education", "Shop for K-12", "Shop for College"],
      },
      {
        title: "For Healthcare",
        links: [
          "Apple in Healthcare",
          "Health on Apple Watch",
          "Health Records on iPhone",
        ],
      },
    ],
  },
  {
    title: "Entertainment",
    links: [
      "Apple One",
      "Apple TV+",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple News+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
    group: [],
  },
  {
    title: "",
    links: [],
    group: [
      {
        title: "Apple Wallet",
        links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
        group: [],
      },

      {
        title: "Account",
        links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
        group: [],
      },
    ],
  },
];

export const LinkBar = () => {
  return (
    <>
      <section>
        <div className={styles.section_bgc}>
          <div className="container">
            <ul className={styles.linkbar__wrap}>
              {links &&
                links.map((el, i) => (
                  <li key={i}>
                    <Link href="" className={styles.top_link}>
                      {el}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.section_link_list}>
        <div className="container">
          <ul className={styles.link_list}>
            {servicesLinks &&
              servicesLinks.map(({title, links, group}, i) => {
                if (title === "") {
                  return (
                    <li key={i}>
                      <ul>
                        {group &&
                          group.map((item, i) => {
                            return (
                              <li key={i}>
                                <p className={styles.title}>{item.title}</p>
                                <ul className={styles.innerList}>
                                  {item?.links &&
                                    item?.links.map((el, i) => (
                                      <li key={i}>
                                        <Link href="" className={styles.link}>
                                          {el}
                                        </Link>
                                      </li>
                                    ))}
                                </ul>
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={i}>
                    <div>
                      <p className={styles.title}>{title}</p>
                      <ul>
                        {links &&
                          links.map((el, i) => (
                            <li key={i}>
                              <Link href="" className={styles.link}>
                                {el}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </>
  );
};
