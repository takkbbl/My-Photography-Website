import Layout from "../components/Layout";
import React, { Component } from "react";
import Gallery from "../components/gallery/Gallery";
import styles from "./Travel.module.scss";
import Head from "next/head" 
import ogimage from "../public/assets/travel/IMG_6574-insta.jpg"
import Link from "next/link"
import { MdKeyboardArrowRight } from 'react-icons/md'


export default class Travel extends Component {
  render() {
    const gallerytype = 'travel'
    return (
      <Layout>
<Head>
          <title>Travel | Felix Melchner Photography</title>
          <meta property="og:url" content="https://www.felixmelchner.de/travel" />
          <meta property="og:title" content="Felix Melchner Photography | Travel" />
          <meta property="og:image" content={ogimage} />
        </Head>
        <div className={styles.wrapper}>
          <Gallery gallerytype={gallerytype}/>
          <Link href="/portrait">
                <a className={styles.next} >Next Gallery<MdKeyboardArrowRight className={styles.arrowicon}/></a>
            </Link>
        </div>
      </Layout>
    );
  }
}
