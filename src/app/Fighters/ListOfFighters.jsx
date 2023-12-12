import styles from "../components/ListOfChampions.module.css";
import { ListOfChampions } from "../components/ListOfChampions";

const fetchAllChampions = () => {
  return fetch(
    `https://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json`
  ).then((res) => res.json());
};

export async function ListOfFighters() {
  const allChampions = await fetchAllChampions();
  const fighters = Object.values(allChampions.data).filter((champion) =>
    champion.tags.includes("Fighter")
  );

  return (
    <div className={styles.container}>
      <div className={styles.championList}>
        {fighters.map((champion) => (
          <ListOfChampions champion={champion} />
        ))}
      </div>
    </div>
  );
}
