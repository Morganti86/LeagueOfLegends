import style from "./SingleChampion.module.css";

export function ChampionDifficulty({ difficulty }) {
  let difDescription;
  let difColor;

  if (difficulty <= 3) {
    difDescription = "LOW";
    difColor = "rgb(0, 255, 0)"; // green
  } else if (difficulty < 8) {
    difDescription = "MEDIUM";
    difColor = "rgb(195, 174, 60)"; //yellow
  } else {
    difDescription = "HIGH";
    difColor = "rgb(255, 0, 0)"; // red
  }

  return (
    <div className={style.container}>
      <div className={style.containerBar}>
        {"DIFFICULTY: "}
        <div className={style.progress_bar}>
          <div style={{ width: difficulty * 10 + "%", background: difColor }}>
            {difDescription}
          </div>
        </div>
      </div>
    </div>
  );
  //max 10 min 0
}
