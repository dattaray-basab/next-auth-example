import Link from "next/link";
import styles from "./header2.module.css";


export default function Header2() {


  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>

      <div>
        <ul>
          <li>
            <Link href='/learn/htm-content'>HTML...</Link>
          </li>
          <li>
            <Link href='/learn/js-content'>Java Script...</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
