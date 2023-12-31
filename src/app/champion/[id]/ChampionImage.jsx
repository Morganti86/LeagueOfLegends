import Image from "next/image";

export function ChampionImage({name, skin}) {
    return (
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skin}.jpg`}
        width={0}
        height={0}
        sizes="100vw"
        alt={name}
        priority={true}
        placeholder="empty"
        // blurDataURL={"/../LOLwallpaper.jpg"}
        style={{ width: "100%", height: "auto" }} // optional
      />
    );
}