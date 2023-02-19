import Link from "next/link";
import styles from "./header2.module.css";


export default function Header2() {


  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>

      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href='/'>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/learn'>The Atef Learning Site</Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/ws'>Private Workspace</Link>
          </li>
    
        </ul>
      </nav>
    </header>
  );
}
