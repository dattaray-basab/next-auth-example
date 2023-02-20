import Link from "next/link";
import styles from "./header.module.css";


export default function Header2() {


  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <nav>
        <ul className={styles.navItems}>

          <li className={styles.navItem}>
            <Link href='/learn/htm'>HTML info</Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/learn/js'>Java Script info</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
