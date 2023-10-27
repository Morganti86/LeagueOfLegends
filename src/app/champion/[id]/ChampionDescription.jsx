import style from "./SingleChampion.module.css";

export function ChampionDescription({ lore }) {
  let textContentOutput = "";
  return (
    <section className={style.container}>
      <div className={style.description}>
        {(textContentOutput = lore.replace(/(<([^>]+)>)/gi, ""))}
      </div>
    </section>
  );
}
