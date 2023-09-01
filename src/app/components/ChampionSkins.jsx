import Image from "next/image";
import style from "../components/SingleChampion.module.css";

export function ChampionSkins({ name, skins }) {
  return (
    <section className={style.container}>
      {/* <div className={style.containerSkin}> */}
        {skins.map((skin) => (
          <div>
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
      {/* </div> */}
    </section>
  );
}
