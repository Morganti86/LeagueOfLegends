import Image from "next/image";

export function Header() {
  return (
    <section>
      <Image
        src={"/LOLheader.webp"}
        width={0}
        height={0}
        sizes="100vw"
        alt="league of legends logo"
        priority={true}
        style={{ width: "100%", height: "auto" }} // optional
      />
    </section>
  );
}
