import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mochilas mineras</title>
        <meta
          name="description"
          content="Mochilas y bolsos especializados para mineras."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}></footer>
    </div>
  );
};
