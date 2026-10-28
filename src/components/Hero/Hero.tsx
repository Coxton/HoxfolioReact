import styles from "./Hero.module.scss";

type HeroProps = {
    title: string;
    subtitle: string;
}


export default function Hero({title, subtitle}: HeroProps) :React.ReactElement{

    return(
        <section className={styles.hero} id="hero">
            <h1 className={styles.pageTitle}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.scrollHint}></div>
        </section>
    );


}