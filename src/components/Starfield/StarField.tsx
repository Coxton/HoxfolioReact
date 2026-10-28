
"use client";

import { useEffect } from "react";
import styles from "./StarField.module.scss";

function generateStars(count: number, max: number): string {
    const shadows: string[] = [];

    for (let i = 0; i < count; i++) {
        shadows.push(
            `${Math.random() * max}px ${Math.random() * max}px #fff`
        );
    }

    return shadows.join(", ");
}

export default function StarField() {
    useEffect(() => {
        const root = document.documentElement;

        root.style.setProperty("--stars-small", generateStars(700, 2000));
        root.style.setProperty("--stars-medium", generateStars(200, 2000));
        root.style.setProperty("--stars-large", generateStars(100, 2000));
    }, []);

    return (
        <div className={styles.starField} aria-hidden="true">
            <div className={styles.nebula} />
            <div className={styles.milkyWay} />
            <div className={styles.sunGlow} />
            <div className={styles.sun} />

            <div className={styles.small} />
            <div className={styles.medium} />
            <div className={styles.large} />
        </div>
    );
}
