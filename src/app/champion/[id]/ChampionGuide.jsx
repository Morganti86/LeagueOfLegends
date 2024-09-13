import style from "./SingleChampion.module.css";

export function ChampionGuide({ name }) {
  return (
    <section>
        <a
          href={`https://u.gg/lol/champions/${name}/build`}
          target="_blank"
          rel="noopener noreferrer"
          role="link">
          <div
            className={style.guideImage}
            style={{
              backgroundImage: `url(
                "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${name}.png"
              )`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}>
            <div className={style.guideTitle}>
              <div className={style.guideTitleName}>GUIDE</div>
            </div>
          </div>
        </a>
    </section>
  );
}
