import Link from "next/link";
import styles from "./header.module.css";


export default function Header2() {


  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <Link href='/learn/js/js-content'>JS Content</Link>
      <br></br>
      <Link href='/learn/htm/htm-content'>HTML Content</Link>
    </header>
  );
}
