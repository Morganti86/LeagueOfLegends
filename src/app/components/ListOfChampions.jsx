import styles from "./ListOfChampions.module.css";
import Link from "next/link";

const fetchAllChampions = () => {
  return fetch(
    `https://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json`
  ).then((res) => res.json());
};

export async function ListOfChampions() {
  const allChampions = await fetchAllChampions();

  return (
    <div className={styles.container}>
      <div className={styles.championList}>
        {Object.values(allChampions.data).map((champion) => (
          <Link href="/Champion/[id]" as={`Champion/${champion.id}`}>
            <div key={champion.id}
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
        ))}
      </div>
    </div>
  );
}
