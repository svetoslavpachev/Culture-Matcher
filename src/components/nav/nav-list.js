import Link from "next/link";
import styles from "./nav-list.module.scss";
import Router, { useRouter } from "next/router";
export default function NavList(props) {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <Link href="/">
        <p className={router.asPath === "/" && styles.active}>Home</p>
      </Link>
      <Link href="/companies">
        <p className={router.asPath === "/companies" && styles.active}>
          For Companies
        </p>
      </Link>
      <Link href="/applicants">
        <p className={router.asPath === "/applicants" && styles.active}>
          For Applicants
        </p>
      </Link>
      <Link href="/culture-test">
        <p className={router.asPath === "/culture-test" && styles.active}>
          Culture Tests
        </p>
      </Link>
    </header>
  );
}
