import { MdKeyboardArrowDown } from 'react-icons/md'
import Link from "next/link"
import styles from "./Menu.module.scss"


export default function Subnavigation() {

    const toggleNav = false;
    const title = "Title";

      const navItems = [
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
    

  return (
    <div className={styles.subnavusecase}>
        <div className={styles.subnavtitle}>{title}
            <div className={styles.mdkeyboardarrowdown}>
                <MdKeyboardArrowDown/>
            </div>
        </div>
        <div className={styles.subnavunorderedlist}>
            {navItems.map((item) => 
                <div className={styles.subnavlistitem}>
                    <Link href="travel" onClick={toggleNav}>
                        {item}
                    </Link>
                </div>)}
        </div>
    </div>
  );
}