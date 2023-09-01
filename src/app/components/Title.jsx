import style from "../components/Title.module.css"

export function Title( {title} ) {
  return <h1 className={style.title}>{title}</h1>;

}
