import Image from "next/image";
import style from "./SingleChampion.module.css"

export function ChampionSpells({ spells }) {
  let textContentOutput = "";
  
  return (
    <>
      {spells.map((spell, index) => (
        <div className={style.containerSpells}>
          <h3 className={style.subTitle}>
            {spell.name} (
            {index === 0
              ? "Q"
              : index === 1
              ? "W"
              : index === 2
              ? "E"
              : index === 3
              ? "R"
              : ""}
            )
          </h3>
          <Image
            className={style.skin}
            src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/${spell.id}.png`}
            width={48}
            height={48}
            sizes="100vw"
            alt={spell.id}
            // style={{ width: "15%", height: "auto" }}
          />

          <div className={style.description}>
            {
              (textContentOutput = spell.description.replace(
                /(<([^>]+)>)/gi,
                ""
              ))
            }
          </div>
        </div>
      ))}
    </>
  );
}