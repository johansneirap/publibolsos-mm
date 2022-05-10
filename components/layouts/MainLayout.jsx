import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Publimochilas</title>
        <meta
          name="description"
          content="Mochilas y bolsos a medida por cantidades"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}></footer>
    </div>
  );
};
