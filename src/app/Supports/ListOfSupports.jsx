import styles from "../components/ListOfChampions.module.css";
import Link from "next/link";

const fetchAllChampions = () => {
  return fetch(
    `https://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json`
  ).then((res) => res.json());
};

export async function ListOfSupports() {
  const allChampions = await fetchAllChampions();
  const supports = Object.values(allChampions.data).filter((champion) =>
    champion.tags.includes("Support")
  );

  return (
    <div className={styles.container}>
      <div className={styles.championList}>
        {supports.map((champion) => (
          <Link href="/champion/[id]" as={`/champion/${champion.id}`}>
            <div
              style={{
                backgroundImage: `url(
                "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg"
              )`,
                height: "250px",
                width: "150px",
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
