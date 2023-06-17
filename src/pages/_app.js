import "@/styles/globals.css";
import NavList from "@/components/nav/nav-list";

export default function App({ Component, pageProps }) {
  return (
    <NavList props={pageProps}>
      <Component {...pageProps} />
    </NavList>
  );
}
