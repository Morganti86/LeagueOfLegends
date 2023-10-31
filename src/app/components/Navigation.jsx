"use client";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { LINKS } from "./Constants";
import { useState } from "react";
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname();
  let path = Object.values({ pathname }).toString().slice(1);
  if (path === "" || path.substring(0, 8).toLowerCase() === "champion") {
    path = "All";
  }

  const [highlight, setHighlight] = useState(path);
  const [isHover, setIsHover] = useState("");

  const highlightEffect = (label) => {
    setHighlight(label);
  };

  const handleMouseEnter = (label) => {
    setIsHover(label);
  };
  const handleMouseLeave = (label) => {
    setIsHover("");
  };


  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {LINKS.map(({ label, route }) => (
            <li className={styles.li} key={route}>
              <Link href={route}>
                <div
                  onClick={() => highlightEffect(label)}
                  onMouseEnter={() => handleMouseEnter(label)}
                  onMouseLeave={() => handleMouseLeave(label)}
                  className={styles.label}
                  style={{
                    backgroundColor:
                      highlight === label ? "rgb(195, 174, 60)" : "",
                    color:
                      isHover === label && highlight === label ? "white" : "",
                  }}>
                  {label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
