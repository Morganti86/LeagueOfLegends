import style from "./SingleChampion.module.css";

export function ChampionTips({ tips, tipsTitle }) {
  if (tips.length === 0) return;
  return (
    <section className={style.container}>
      <h3 className={style.title}>{tipsTitle}</h3>
      <ul className={style.description}>
        {tips.map((tip) => (
          <li>
            {tip}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </section>
  );
}
