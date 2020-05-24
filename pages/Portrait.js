import Layout from "../components/Layout";
import React, { Component } from "react";
import Gallery from "../components/gallery/Gallery";
import styles from "./Portrait.module.scss";
import Head from "next/head";
import ogimage from "../public/assets/portrait/felixmelchner_felibasti3.jpg";

export default class Portrait extends Component {
  render() {
    const gallerytype = "portrait";
    return (
      <Layout>
        <Head>
          <title>Portrait | Felix Melchner Photography</title>
          <meta
            property="og:url"
            content="https://www.felixmelchner.de/portrait"
          />
          <meta
            property="og:title"
            content="Felix Melchner Photography | Portrait"
          />
          <meta property="og:image" content={ogimage} />
        </Head>
        <div className={styles.wrapper}>
          <Gallery gallerytype={gallerytype} />
        </div>
      </Layout>
    );
  }
}
