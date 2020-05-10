import Layout from '../components/Layout'
import React, { Component } from "react";

import styles from "./Pages.module.scss"
import Link from "next/link"
import { MdKeyboardArrowRight } from 'react-icons/md'

export default class Index extends Component{
  constructor(props) {
    super(props);
    this.state = { height: 512 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
}

componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
}

updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(this.state.height);
}
  
  render(){
    return(
      <Layout>
    <div>
      <div className={styles.background}>
        <div className={styles.bg}>
          <div className={styles.container} style={{minHeight: this.state.height}} >
            <div className={styles.text}>
              <h2>Follow me on my</h2>
              <h1>Adventures</h1>
              <h3>filled with stunning landscapes, hidden places and mysterious moods.</h3>
              <h3></h3>
              <div className={styles.seemore}>
              <Link href="/travel">
                <a className={styles.button} >View Gallery <MdKeyboardArrowRight className={styles.arrowicon}/></a>
              </Link>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  </Layout>
    );
  }
}
