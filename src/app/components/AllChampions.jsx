import styles from "./ListOfChampions.module.css";
import { ListOfChampions } from "./ListOfChampions";

const fetchAllChampions = () => {
  return fetch(
    `https://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json`
  ).then((res) => res.json());
};

export async function AllChampions() {
  const allChampions = await fetchAllChampions();

  return (
    <div className={styles.container}>
      <div className={styles.championList}>
        {Object.values(allChampions.data).map((champion) => (
          <ListOfChampions champion={champion} />
        ))}
      </div>
    </div>
  );
}
