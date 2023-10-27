import { ChampionImage } from "./ChampionImage";
import { ChampionTitle } from "./ChampionTitle";
import { ChampionDescription } from "./ChampionDescription";
import { ChampionSkins } from "./ChampionSkins";
import { Title } from "../../components/Title";
import ChampionAbilities from "./ChampionAbilities";
import { ChampionDifficulty } from "./ChampionDifficulty";

const fetchChampion = async (id) => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion/${id}.json`
  );
  return await res.json();
};

export default async function SingleChampion({ id }) {
  const champion = await fetchChampion(id);
  const championId = Object.values(champion.data);

  const name = championId[0].id;
  const title = championId[0].title;
  const lore = championId[0].lore;
  const difficulty = championId[0].info.difficulty;
  const allyTips = championId[0].allytips;
  const enemyTips = championId[0].enemytips;
  const passive = championId[0].passive;
  const spells = championId[0].spells;

  const listOfSkins = [];
  const skins = championId[0].skins;
  skins.map((skin) =>
    listOfSkins.push({ skinId: skin.num, skinName: skin.name })
  );

  const randomSkin =
    // api bug -> Fiddlesticks_27
    listOfSkins[Math.floor(Math.random() * listOfSkins.length)];
  // listOfSkins[0].skinId;

  return (
    <section>
      <ChampionImage name={name} skin={randomSkin.skinId} />
      <ChampionTitle name={name} title={title} />
      <Title title="INFORMATION" />
      <ChampionDescription lore={lore} />
      <ChampionDifficulty difficulty={difficulty} />
      <Title title="ABILITIES" />
      <ChampionAbilities passive={passive} spells={spells} />
      <Title title="SKINS" />
      <ChampionSkins name={name} skins={skins} />
    </section>
  );
}
