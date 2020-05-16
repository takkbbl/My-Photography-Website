import Layout from "../components/Layout";
import React, { Component } from "react";
import Gallery from "../components/gallery/Gallery";
import styles from "./Travel.module.scss";

export default class Travel extends Component {
  render() {
    return (
      <Layout>

        <div className={styles.wrapper}>
          <Gallery />
        </div>
      </Layout>
    );
  }
}
