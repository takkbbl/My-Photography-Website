import React from "react";
import Link from "next/link";
import styles from "./Menu.module.scss";
import {useRouter} from "next/router"

export default function MainMenu(props) {

    const isVisible = props.toggled;
    const toggle = props.toggle;

    const mainMenu = [
        "Travel",
        "Portrait",
        "Blog",
        "Contact"
      ];
    
      const subheader = [
        "By Industry",
        "By Use Case",
        "Learn",
        "Company"
      ];
    
      const industryList = [
        "Airlines", 
        "Automotive", 
        "Consumer Electronics", 
        "E-Commerce", 
        "Gaming", 
        "Healthcare", 
        "Hotel", 
        "Restaurant", 
        "Retail", 
        "TV&Telco"
        ];
    
    const useCaseList = [
        "Product Innovation",
        "Customer Experience",
        "Brand Health",
        "Open-Ended Survey Analysis",
        "Employee Satisfaction",
        "Messaging for MarCom",
        ];
    
    const learnList = [
        "Knowledge Center",
        "Webinars",
        "Research",
        "Technology",
        ];
    
    const companyList = [
        "About Symanto",
        "Our Team",
        "Our Customers",
        "Careers"
        ];

        const router = useRouter();

  return (
    <div className={styles.unorderedlistmain} style={{display: isVisible ? 'block' : 'none'}}>
        <li className={router.pathname == "/travel" ? styles.listitemactive : styles.listitem}>
          <Link href={"/travel"}>
            <a>Travel</a>
          </Link>
        </li>
        <li className={router.pathname == "/portrait" ? styles.listitemactive : styles.listitem}>
          <Link href={"/portrait"}>
            <a>Portrait</a>
          </Link>
        </li>
        <li className={router.pathname == "/blog" ? styles.listitemactive : styles.listitem}>
          <Link href={"/blog"}>
            <a>Blog</a>
          </Link>
        </li>
        <li className={router.pathname == "/contact" ? styles.listitemactive : styles.listitem}>
          <Link href={"/contact"}>
            <a>Contact</a>
          </Link>
        </li>
  </div>
  );
}