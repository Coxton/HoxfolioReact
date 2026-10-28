import Hero from "../components/Hero/Hero";
import styles from "./Home.module.scss"
import Link from "next/link";


export default function Home() {
    return (
        <main className={styles.mainContent}>
            <Hero
                title= "Hoxton"
                subtitle="Developer of all things that interest me"
                />

          <section className={styles.container}>
                <div className={`styles.containerInner styles.aboutSection`}>
                    <h2 className={styles.textHead}>
                        <Link href="/about">
                            About Me
                        </Link>
                    </h2>
                    <p className={styles.lineText}>
                        I build interactive web experiences with a focus on
                        atmosphere, clarity and technical depth.
                    </p>
                    <p className={styles.lineText}>
                        My work blends clean frontend design with a focus on
                        readability and performance using modern web technologies
                        such as Next.js and Content Management Systems like WordPress to bring
                        different visions to life.
                    </p>
                </div>
            </section>

            <section className={styles.container}>
                <div className={`styles.containerInner styles.aboutSection`}>
                    <h2 className={styles.textHead}>
                        <Link href="/about">
                            Skillset
                        </Link>
                    </h2>

                    <h3 className={styles.textHead}>
                        WordPress
                    </h3>
                    <p className={styles.lineText}>
                        Probably one of the most popular CM-Systems out there: WordPress.
                        <br/>
                        I have built many custom themes and plugins over my years of employment as a Web Developer and have gathered
                        a good understanding of the ins and outs behind the popular Page building tool.
                    </p>

                    <h3 className={styles.textHead}>
                        Clean code using modern libraries, frameworks and code from scratch
                    </h3>

                    <p className={styles.lineText}>
                        There are many ways to create a modern, well performing and eye-catching Website or App, so it is especially important
                        that as a developer you have many tools under your belt.
                        Therefore I make it my personal mission to keep educating myself with the latest web solutions.
                        Whether it be React, Node.js or using many of the popular Content Management Systems out on the market, I have a broad
                        set of skills which help me visualize my idea.
                    </p>
                </div>
            </section>

            <section className={styles.work}>
                <div className={styles.workHead}>
                    <h2 className={styles.textHead}>
                        <Link href="/projects" >
                            Projects
                        </Link>
                    </h2>
                </div>
                <article className={styles.project}>
                    <Link href="https://github.com/Coxton/HoxVisualizer" className={styles.projectLink} target="_blank">
                        <h3 >
                            HoxVisualizer
                        </h3>
                    </Link>
                    <p className={styles.lineText}>Audio Visualizer utilising Windows Core audio API</p>
                    <span className={styles.lineSubText}>Node.js · OAuth · OBS · TypeScript</span>
                </article>

                <article className={styles.project}>
                    <Link href="https://github.com/Coxton/Hoxfolio" className={styles.projectLink} target="_blank">
                        <h3 >
                            Hoxfolio (Under Development)
                        </h3>
                    </Link>
                    <p className={styles.lineText}>Personal Portfolio Website with Blog functionality</p>
                    <span className={styles.lineSubText}>Next.js · TypeScript · SCSS · VPS</span>
                </article>
            </section>    
        </main>
    );
}