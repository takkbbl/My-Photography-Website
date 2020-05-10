import Link from 'next/link'
import styles from "./Menu.module.scss"

export default function Headerlogo() {
  return (
    <div className={styles.logocontainer}>
        <Link href="/">
            <a className={styles.logohref}>Felix Melchner</a>
        </Link>
        </div>
  );
}