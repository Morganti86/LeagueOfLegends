import style from "../components/ChampionTitle.module.css"

export function ChampionTitle({name, title}) {
  return (
    <section className={style.name_title}>
      <h1 className={style.name}>{name}</h1>
      <p className={style.title}>{title}</p>
    </section>
  );
}
