import Layout from "../components/Layout";
import styles from "./Impressum.module.scss";

const Index = () => (
  <Layout>
    <div>
      <div className={styles.wrapper}>
        <div className={styles.textsection}>
          <h1>Impressum</h1>
          <h2>Seiteninhaber</h2>
          <p>
            Felix Melchner
            <br />
            Pirckheimerstraße 78
            <br />
            90409 Nürnberg
            <br />
            Germany
          </p>
          <h2>Haftung</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine
            Haftung für die Inhalte externer Links. Für den Inhalt der
            verlinkten Seiten sind ausschliesslich deren Betreiber
            verantwortlich.
          </p>
          <h2>Nutzungshinweise</h2>
          <p>
            Eine unerlaubte Verwendung, Reproduktion, Weitergabe,
            Veröffentlichung oder eine kommerzielle Nutzung ohne Genehmigung des
            Urhebers der auf dieser Webseite befindlichen Inhalte ist untersagt
            und wird sowohl straf- als auch zivilrechtlich verfolgt!
          </p>
          <h3>Alle Bilder (c) Felix Melchner</h3>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
