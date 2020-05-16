import React, { Component } from 'react';
import styles from "./Menu.module.scss";
import Headerlogo from "./Headerlogo";
import MainMenu from "./MainMenu";
import MenuToggleButton from "./MenuToggleButton";
import SideMenu from "./SideMenu";


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = false;
        this.isVisible = false;
        this.hasBackgroundColor = true;

      }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Change background of navigation on scroll
  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    
   
    if (currentScrollPos <= 0 && !this.state.isVisible)
    {
        this.setState({hasBackgroundColor:false})
    }
    else{
        this.setState({hasBackgroundColor:true})
    }
  };

    Toggle = () => {
        this.setState({isVisible:!this.state.isVisible});
        this.setState({hasBackgroundColor:!this.state.isVisible})
        
    }

    render() {
        return (
          <>
              <div className={styles.navbar} style={{backgroundColor: this.state.hasBackgroundColor ? "#1b1b1b" : "transparent"}}>
                    <div className={styles.cont}>
                    <Headerlogo/>
                    <MenuToggleButton toggle={this.Toggle} toggled={this.state.isVisible}/>
                        <div className={styles.menucontainer}>
                           <MainMenu toggled={this.state.isVisible} toggle={this.Toggle}/>
                           <SideMenu toggled={this.state.isVisible}/>
                        </div>
                    </div>
                </div>
          </>
        );
    }
}