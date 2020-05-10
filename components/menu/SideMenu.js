import styles from "./Menu.module.scss"

export default function SideMenu(props) {

return (
<div className={styles.subnavunorderedlistside} style={{display: props.toggled ? 'block' : 'none'}}>
    <li className={styles.listitem}>
        <a rel="noopener noreferrer" href="https://www.facebook.com/felixmelchnerphotography" target="_blank">Facebook</a>
    </li>
    <li className={styles.listitem}>
        <a rel="noopener noreferrer" href="https://www.instagram.com/felixmelchner/" target="_blank">Instagram</a>
    </li>
</div>
  );
} 
 
    