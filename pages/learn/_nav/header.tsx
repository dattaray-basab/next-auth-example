import Link from "next/link";
import styles from "./header.module.css";

export default function Header2() {
  return (
    <header>
      <h3>The Atef Learning Site</h3>
      <section className='flex'>
        <aside className='w-1/4'>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link href='/learn/html'>HTML info</Link>
            </li>
            <li className={styles.navItem}>
              <Link href='/learn/js'>Java Script info</Link>
            </li>
            <li className={styles.navItem}>
              <Link href='/learn/style-sheets'>Style Sheets info</Link>
            </li>
          </ul>
        </aside>
      </section>
    </header>
  );
}
