import Menu from "./menu/Menu";
import styles from "./Layout.module.scss"
import Head from "next/head" 
import Footer from "./footer/Footer"

const Layout = ({ children }) => (
  <div>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400;1,800&display=swap" rel="stylesheet"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Hi! I'm a travel and portrait photographer from Nürnberg, Germany. " />
      <meta name="keywords" content="photographer, travel, portrait, germany, bavaria, nürnberg, nuremberg" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Hi! I'm a travel and portrait photographer from Nürnberg, Germany. " />
    </Head>
    <nav>
        <Menu/>
    </nav>
    <div className={styles.wrapper}>
      <div className={styles.contentwrapper}>
          {children}
      </div>
      <div className={styles.footerwrapper}>
        <Footer/>
      </div>
    </div>
  </div>
);

export default Layout;
