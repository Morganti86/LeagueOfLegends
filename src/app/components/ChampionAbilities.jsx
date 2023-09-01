import { ChampionPassive } from "./ChampionPassive";
import { ChampionSpells } from "./ChampionSpells";
import style from "../components/SingleChampion.module.css";

export default async function ChampionAbilities({ passive, spells }) {
  return (
    <section className={style.container}>
      <div className={style.containerAbilities}>
        <ChampionPassive passive={passive} />
        <ChampionSpells spells={spells} />
      </div>
    </section>
  );
}
