import Image from "next/image";
import style from "./SingleChampion.module.css";

export function ChampionPassive({ passive }) {
  let textContentOutput = "";
  return (
    <section className={style.containerSpells}>
      <h3 className={style.subTitle}>
        {passive.name} {"(PASSIVE)"}
      </h3>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/passive/${passive.image.full}`}
        width={48}
        height={48}
        sizes="100vw"
        alt={passive.image.full}
      />
      <div className={style.description}>
        {(textContentOutput = passive.description.replace(/(<([^>]+)>)/gi, ""))}
      </div>
    </section>
  );
}
