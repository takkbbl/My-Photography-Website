import React, { Component } from "react";
import styles from "./Gallery.module.scss"


import Traveldesktopview from "./TravelDesktopView"
import Travelmobileview from "./TravelMobileView"
import Portraitdesktopview from "./PortraitDesktopView"
import Portraitmobileview from "./PortraitMobileView"

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
    if(this.props.gallerytype === 'travel')
    {
      if(this.state.width<701)
      {
          view = <Travelmobileview/>
      }
      else
      {
          view = <Traveldesktopview/>
      }
    }
    else
    {
      if(this.state.width<701)
      {
          view = <Portraitmobileview/>
      }
      else
      {
          view = <Portraitdesktopview/>
      }
    }
    
    return (
      <>
        <div className={styles.wrapper}>
            {view}
        </div>
      </>
    );
  }
}
