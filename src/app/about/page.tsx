import Hero from "../../components/Hero/Hero";
import Link from "next/link";
import styles from "./About.module.scss";


export default function Home() {
    return (
        <main className={styles.about}>
            <Hero
                title= "About Me"
                subtitle="The Developer Behind the Code"
                />

            <section className={styles.container}>
                <div className={styles.aboutWrapper}>
                    <h2 className={styles.aboutHead}>
                        Hey, I'm Hoxton.
                    </h2>
                    <div className={styles.aboutBody}>
                        <p className={styles.lineText}>
                            Or rather that's how the Internet knows me. My friends and family call me André.
                            I'm a web developer who enjoys turning his various ideas into practial and well crafted experiences. 
                        </p>
                        <p className={styles.lineText}>
                            There's a reason why I call myself a Developer of anything that peaks my interest.
                            Because when it comes down to it, that is how I decide what I want to learn next, as you'll
                            find out the more you read about me.
                        </p>
                    </div>          
                </div>
            </section>

            <section className={styles.journey}>
                <div className={styles.projectWrapper}>
                    <header className={styles.journeyHeader}>
                        <h2 className={styles.aboutHead}>
                            How did I get here?
                        </h2>
                        <p className={styles.lineText}>
                          That question can pretty much be broken down in three chapters.   
                        </p>
                    </header>

                    <div className={styles.aboutTimeline}>
                        <article className={styles.aboutEntry}>
                            <div className={styles.marker}>
                                <span />
                            </div>

                            <div className={styles.aboutContent}>
                                <span className={styles.chapter}>
                                    CHAPtER 01
                                </span>

                                <h3 className={styles.chapterHead}>
                                    First Steps
                                </h3>

                                <p className={styles.chapterContent}>
                                    I haven't actually touched coding until I was 19 years old when I landed
                                    an apprenticeship by chance with a family friend. At first it wasn't anything
                                    groundbreaking, but rather a humble start in Web development using WordPress and later Shopware.
                                    Though it did however fascinate me how I can create a visually stunning Web environment from basically nothing.
                                    
                                </p>
                                <p className={styles.chapterContent}>
                                    Well it gave me a good foundation for my future interests in different aspects of coding and I soon ventured
                                    beyond just HTML, CSS and a bit of JavaScript and PHP.
                                </p>
                            </div>
                        </article>

                        <article className={styles.aboutEntry}>
                            <div className={styles.marker}>
                                <span />
                            </div>

                            <div className={styles.aboutContent}>
                                <span className={styles.chapter}>
                                    CHAPTER 02
                                </span>

                                <h3 className={styles.chapterHead}>
                                    Learning and experience
                                </h3>

                                <p className={styles.chapterContent}>
                                    Unfortunately due to various personal circumstances I could not finish my apprenticeship as a Developer,
                                    but that did not discourage me from continuing to enhance my skills in coding.
                                    Since gaming has always been a big part of my spare time, I eventually became interested in game development. 
                                    I started experimenting with Unity and C#, which gave me my first real experience with object-oriented programming. 
                                    I even took part in a small team project for a GameJam, which was a great opportunity to put some of that knowledge into practice.        
                                </p>
                                <p className={styles.chapterContent}>
                                    The thing about me really is I try out a lot of things, mainly because I want to understand how said things work. This is basically
                                    my driving force when I decide what to learn next. Whether it be Web technologies, Desktop Apps or even Mobile Apps. I just try it out.
                                    My curiosity eventually led me beyond web development and into desktop applications. Using Electron, I combined technologies I was 
                                    already familiar with while expanding my knowledge of Node.js and API integrations. 
                                </p>
                                <p className={styles.chapterContent}>
                                    One of the projects that came out of this was a music bot connecting Spotify and Twitch, allowing viewers to request songs directly through Twitch.
                                </p>
                                <p className={styles.chapterContent}>
                                    Another project, and probably my most ambitious one so far, is my audio visualizer. Inspired by my fascination with deep space, 
                                    I set out to create a real-time audio visualizer featuring a 3D nebula. This project brought together audio capture, signal processing and 
                                    Three.js, challenging me to work across several different areas of development.
                                </p>
                            </div>
                        </article>
                        <article className={styles.aboutEntry}>
                            <div className={styles.marker}>
                                <span />
                            </div>

                            <div className={styles.aboutContent}>
                                <span className={styles.chapter}>
                                    CHAPTER 03
                                </span>

                                <h3 className={styles.chapterHead}>
                                    Where I am today and where I am headed
                                </h3>

                                <p className={styles.chapterContent}>
                                    Today, I'd say I'm still very much in the process of finding my footing as a developer. 
                                    I've explored quite a few different areas of programming over the years, but web development is still where I feel most at home. 
                                    I enjoy working on the frontend just as much as understanding what's happening behind the scenes, 
                                    and I always appreciate an opportunity to learn something new along the way.
                                </p>
                                <p className={styles.chapterContent}>
                                    What I particularly enjoy about development is that there's always something else to figure out.
                                    For example, I thought I had a good grasp on modern web technologies, but now that I am really committing to React and especially Next.js,
                                    I realise that there are so many great libraries and frameworks out there that really enhance my work as a Web Developer.
                                    Though I also do not want to limit myself to one particular area of development, because exploring different areas of dev work is what makes it so exciting to me.
                            
                                </p>
                                <p className={styles.chapterContent}>
                                    Looking ahead I absolutely want to dive deeper into industry standard frameworks/libraries like React, Angular, Vue and so on, to see the different pros and cons with each one of them.
                                    I want to take what I have learned over the years I have been coding and turn it into a professional career, where I can hone my skills even more by working alongside fellow developers
                                    and share my knowledge with likeminded people and in return learning from their experiences and contributing my own ideas and skills to meaningful projects.
                                </p>
                                <p className={styles.chapterContent}>
                                    I still have plenty to learn and to create, and honestly, that's part of what makes development so exciting to me.
                                </p>
                            </div>
                        </article>
                    </div>       
                </div>
            </section>


            <section className={styles.toolkit}>
                <header className={styles.header}>

                    <h2 className={styles.aboutHead}>My toolkit.</h2>

                    <p className={styles.lineText}>
                        An overview of the technologies, tools and
                        platforms I work with.
                    </p>
                </header>

                <div className={styles.toolkitGrid}>

                    <article className={styles.toolkitCard}>
                        <header className={styles.cardHeader}>
                            <span className={styles.cardNumber}>01</span>
                            <h3>Frontend</h3>
                        </header>

                        <ul className={styles.technologyList}>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>TypeScript</li>
                            <li>SCSS</li>
                        </ul>
                    </article>

                    <article className={styles.toolkitCard}>
                        <header className={styles.cardHeader}>
                            <span className={styles.cardNumber}>02</span>
                            <h3>Backend</h3>
                        </header>

                        <ul className={styles.technologyList}>
                            <li>PHP</li>
                            <li>Node.js</li>
                            <li>SQL</li>
                        </ul>
                    </article>

                    <article className={styles.toolkitCard}>
                        <header className={styles.cardHeader}>
                            <span className={styles.cardNumber}>03</span>
                            <h3>Tools & Platforms</h3>
                        </header>

                        <ul className={styles.technologyList}>
                            <li>Git</li>
                            <li>VS Code</li>
                            <li>WordPress</li>
                            <li>Shopware</li>
                        </ul>
                    </article>

                    <article className={styles.toolkitCard}>
                        <header className={styles.cardHeader}>
                            <span className={styles.cardNumber}>04</span>
                            <h3>Other</h3>
                        </header>

                        <ul className={styles.technologyList}>
                            <li>Electron</li>
                            <li>Three.js</li>
                            <li>Unity3D</li>
                        </ul>
                    </article>

                </div>
            </section>


        </main>

    );
}