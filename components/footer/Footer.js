import React, { Component } from "react";
import styles from "./Footer.module.scss";
import Instagram from "../../public/assets/instagram.svg";
import Facebook from "../../public/assets/facebook.svg";
import Link from "next/link";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div>
              <h4 className={styles.head}>Felix Melchner</h4>
              <p>Photographer</p>
              <p>Phone: +49 176 960 454 36</p>
              <p>Nürnberg, Germany</p>
              <p>
                <a
                  href="mailto:mail@felixmelchner.de"
                  className={styles.contact_url}
                >
                  mail@felixmelchner.de
                </a>
              </p>
              <div className={styles.social}>
                <a href="https://www.facebook.com/felixmelchnerphotography">
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/felixmelchner/">
                  <img src={Instagram} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.links}>
              <h4 className={styles.links}>Important Links</h4>
              <p>
              <Link href={"/privacy-policy"}>
                  <a>Privacy Policy</a>
                </Link>
              </p>
              <p>
                <Link href={"/impressum"}>
                  <a>Impressum</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
