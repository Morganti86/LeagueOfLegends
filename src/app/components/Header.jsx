import style from "../components/Footer.module.css";
import Image from "next/image";

export function Header() {
  return (
    <section className={style.header}>
      <Image
        src={"/../LOLheader.jpg"}
        width={0}
        height={0}
        sizes="100vw"
        alt={"league of legends logo"}
        priority={true}
        // placeholder="blur"
        // blurDataURL={"/../LOLwallpaper.jpg"}
        style={{ width: "100%", height: "18vw" }} // optional
      />
    </section>
  );
}
