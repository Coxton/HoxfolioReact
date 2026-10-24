import styles from "./Header.module.scss";
import Image from "next/image";

export default function Header() :React.ReactElement{

    return(

        <header className={styles.mainHeader}>

            <div className={styles.navBar}>
                <div className={styles.logo}>
                    <a className={styles.menuLink} href="/home">
                        <Image src={"/img/Logo_white.png"} 
                        alt="HoxtonLogo"
                        width={180}
                        height={100} 
                        className={`${styles.imageElement}`} 
                        />
                    </a>
                </div>
                <div className={styles.menu}>
                    <div className={styles.menuItem}>
                        <a className={styles.menuLink} href="/about">
                            About
                        </a>
                    </div>

                    <div className={styles.menuItem}>
                        <a className={styles.menuLink} href="/projects">
                            Projects
                        </a>
                    </div>
                </div>
            </div>


        </header>


    );

}