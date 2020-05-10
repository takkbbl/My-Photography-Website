import React from "react";
import { motion } from "framer-motion";
import MenuToggleButtonAnimate from "./MenuToggleButtonAnimate"
import styles from "./Menu.module.scss";

export default function MenuToggleButton(props) {

  const toggle = props.toggle;
  const isVisible = props.toggled;

  return (
    <div className={styles.menutogglebutton}>
      <motion.nav initial={false} animate={isVisible ? "open" : "closed"}>
        <MenuToggleButtonAnimate toggle={toggle} />
      </motion.nav>
    </div>
  );
}