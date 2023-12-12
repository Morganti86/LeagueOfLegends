"use client";
import Link from "next/link";
import styles from "./ListOfChampions.module.css";
import { useEffect, useRef, useState } from "react";

export function ListOfChampions({ champion }) {
  const cardRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current?.getBoundingClientRect();
        const visible =
          rect?.top >= window.innerHeight / 1.2 ||
          rect?.bottom <= window.innerHeight / 6;
        setIsVisible(visible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      cardRef.current.classList.add(styles.show);
    } else {
      cardRef.current.classList.remove(styles.show);
    }
  }, [isVisible]);

  useEffect(() => {
    const rect = cardRef.current?.getBoundingClientRect();
    const visible = rect?.top >= window.innerHeight / 1;
    setIsVisible(visible);
  }, []);

  return (
    <section
      className={`${styles.ListCard} ${isVisible && styles.show}`}
      ref={cardRef}>
      <Link href="/champion/[id]" as={`champion/${champion.id}`}>
        <div
          key={champion.id}
          className={styles.championBackground}
          style={{
            backgroundImage: `url(
                "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg"
              )`,
            height: "auto",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
          <div className={styles.championCard}>
            <div className={styles.championName}>{champion.name}</div>
          </div>
        </div>
      </Link>
    </section>
  );
}
