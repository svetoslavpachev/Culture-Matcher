import Link from "next/link";
import styles from "./nav-list.module.scss";

export default function NavList(props) {
  return (
    <header className={styles.container}>
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/companies">
        <p>For Companies</p>
      </Link>
      <Link href="/applicants">
        <p>For Applicants</p>
      </Link>
      <Link href="/culture-test">
        <p>Culture Tests</p>
      </Link>
    </header>
  );
}
