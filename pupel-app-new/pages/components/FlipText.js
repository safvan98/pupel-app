import { useEffect, useState } from "react";
import styles from './FlipText.module.css'
export default function FlipText() {
    return (
        <h1 className={styles.sentence_three}>
          To Share Your{" "}
          <span className={styles.flip}>
            <span>Stories</span>
            <span>Positivity</span>
            <span>Skills</span>
            <span>Happiness</span>
          </span>
        </h1>
    )
  }