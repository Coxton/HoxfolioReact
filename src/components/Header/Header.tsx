import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header() :React.ReactElement{

    return(

        <header className={styles.mainHeader}>

            <div className={styles.navBar}>
                <div className={styles.logo}>
                    <Link className={styles.menuLink} href="/">
                        <Image
                            src="/img/Logo_white.png"
                            alt="Hoxton Logo"
                            width={130}
                            height={100}
                            className={styles.imageElement}
                        />
                    </Link>
                </div>
                <div className={styles.menu}>
                    <div className={styles.menuItem}>
                        <Link className={styles.menuLink} href="/about">
                            About
                        </Link>
                    </div>

                    <div className={styles.menuItem}>
                        <Link className={styles.menuLink} href="/projects">
                            Projects
                        </Link>
                    </div>
                </div>
            </div>


        </header>


    );

}