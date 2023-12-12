import Image from "next/image";
import style from "./SingleChampion.module.css";

export function ChampionSkins({ name, skins }) {
  if (skins.length > 2 && skins.length <= 5) {
    return (
      <section className={style.containerSkin}>
        {skins.map((skin) => (
          <Image
            key={skin.name}
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skin.num}.jpg`}
            width={280}
            height={280}
            sizes="100vw"
            alt={skin.name}
            style={{ width: "280", height: "auto" }} // optional
          />
        ))}
      </section>
    );
  } else {
    return (
      <section className={style.container}>
        {skins.map((skin) => (
          <div className={style.containerSkin2} key={skin.name}>
            <div className={style.skinName}>{skin.name}</div>
            <Image
              className={style.skinBorder}
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skin.num}.jpg`}
              width={0}
              height={0}
              sizes="100vw"
              alt={skin.name}
              style={{ width: "100%", height: "auto" }} // optional
            />
          </div>
        ))}
      </section>
    );
  }
}
