import React, { Component } from "react";
import styles from "./Gallery.module.scss"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MdKeyboardArrowRight } from 'react-icons/md'
import Link from "next/link"
import Desktopview from "./DesktopView"
import Mobileview from "./MobileView"

export default class Gallery extends Component {
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
    }
  render() {
    let view;  
    if(this.state.width<701)
      {
          view = <Mobileview/>
      }
      else
      {
          view = <Desktopview/>
      }
    return (
      <>
        <div className={styles.wrapper}>
            {view}
            <Link href="/portrait">
                <a className={styles.next} >Next Gallery<MdKeyboardArrowRight className={styles.arrowicon}/></a>
            </Link>
        </div>
      </>
    );
  }
}
