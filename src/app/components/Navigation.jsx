import Link from "next/link";
import styles from "./Navigation.module.css";
import { LINKS } from "./Constants";


export function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {LINKS.map(({ label, route }) => (
            <li className={styles.li} key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
