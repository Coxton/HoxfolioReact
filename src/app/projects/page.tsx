import Hero from "../../components/Hero/Hero";
import styles from "./Projects.module.scss";
import Link from "next/link";


export default function Projects() {
    return (
        <main className={styles.mainContent}>
            <Hero
                title= "Projects"
                subtitle="All my current Work"
                />

            <section className={styles.container}>
                <div className={styles.projectWrapper}>
                    <h2 className={styles.textHead}>
                        <Link href="https://github.com/Coxton/Hoxfolio" className={styles.projectLink} target="_blank">
                            Hoxfolio
                        </Link>
                    </h2>
                    <div className={styles.projectBody}>
                        <p className={styles.lineText}>
                            This project serves as the backbone of my entire Portfolio.
                        </p>
                        <p className={styles.lineText}>
                            It is a Work In Progress and the goal by the end of it is to have my own personal CMS.
                            Complete with it's own Drag & Drop Webpage Builder, Blog and a fully operational   
                            Backend which shows Website Analytics and lets me change settings on the fly.
                            Not only does this Project serve as a display of my understanding of Web Development, 
                            but also as a structure for any future Websites I'd like to create. 
                        </p>
                        <p className={styles.lineText}>
                            Currently I am in the process of creating the Core Mechanics, using the React Library Next.js.
                            My Website is being hosted via my personal VPS on this domain. Making use of GitHub actions I have
                            automated the process of deploying new versions of my code to my domain, which also served to expand
                            my knowledge in server administration. 
                        </p>
                    </div>          
                </div>
            </section>

            <section className={styles.container}>
                <div className={styles.projectWrapper}>
                    <h2 className={styles.textHead}>
                        <Link href="https://github.com/Coxton/HoxVisualizer" className={styles.projectLink} target="_blank">
                            HoxVisualizer
                        </Link>
                    </h2>
                    <div className={styles.projectBody}>
                        <p className={styles.lineText}>
                            This app is a Windows Audio Visualizer with Spotify Compatibality
                        </p>
                        <p className={styles.lineText}>
                            Originally I simply wanted to update my Drums of War Music bot, though the idea sparked of adding a Visualizer
                            to it, which then extended to learning the popular JavaScript library Three.js for the actual visuals. 
                        </p>
                        <p className={styles.lineText}>
                            This is most likely the biggest and most ambitious task I have undertaken in my spare time, though I am very happy with the result.
                            I have not only learned more about Three.js, but also TypeScript. The App is Electron based, using Node.js and even a little helper written in C++.
                            I will go more in depth on a seperate page once I have written up my documentation.
                        </p>
                    </div>          
                </div>
            </section>
        </main>
    );
}