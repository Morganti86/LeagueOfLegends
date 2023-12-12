import styles from "../components/ListOfChampions.module.css";
import { ListOfChampions } from '../components/ListOfChampions';

const fetchAllChampions = () => {
  return fetch(
    `https://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json`
  ).then((res) => res.json());
};

export async function ListOfAssassins() {
  const allChampions = await fetchAllChampions();
  const assassins = Object.values(allChampions.data).filter((champion) =>
    champion.tags.includes("Assassin")
  );

  return (
    <div className={styles.container}>
      <div className={styles.championList}>
        {assassins.map((champion) => (
          <ListOfChampions champion={champion} />
        ))}
      </div>
    </div>
  );
}
