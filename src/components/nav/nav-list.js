import Link from "next/link";
import styles from "./nav-list.module.scss";
import Router, { useRouter } from "next/router";
export default function NavList(props) {
  const router = useRouter();

  return (
    <>
      <header className={styles.container}>
        <Link href="/">
          <p className={router.asPath === "/" ? styles.active : undefined}>
            Home
          </p>
        </Link>
        <Link href="/companies">
          <p
            className={
              router.asPath.includes("/companies") ? styles.active : undefined
            }
          >
            For Companies
          </p>
        </Link>
        <Link href="/applicants">
          <p
            className={
              router.asPath.includes("/applicants") ? styles.active : undefined
            }
          >
            For Applicants
          </p>
        </Link>
        <Link href="/culture-types">
          <p
            className={
              router.asPath.includes("/culture-types")
                ? styles.active
                : undefined
            }
          >
            Culture Types
          </p>
        </Link>
      </header>
      <main className={styles.main}>{props.children}</main>
    </>
  );
}
