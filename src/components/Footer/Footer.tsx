import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() :React.ReactElement{

    return(
        <footer className={styles.mainFooter}>
            <div className={styles.footerColumn}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link className={styles.footerLink} 
                            href="https://github.com/Coxton" target="_blank">
                            GitHub
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link className={styles.footerLink} 
                            href="https://www.instagram.com/hoxtoncox/" target="_blank">
                            Instagram
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link className={styles.footerLink} 
                            href="https://www.twitch.tv/hoxtoncoxton" target="_blank">
                            Twitch
                        </Link>
                    </li>
                </ul>
            </div>
            <span className={styles.footerSubtitle}>Hoxton 2026</span>
        </footer>
    )

}