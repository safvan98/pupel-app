import React from "react";
import Button from "./Button";
import Image from "next/image";
import styles from "./Head.module.css";
import HandImage from "../../src/hand-pepul-removebg.png";
import FlipText from "./FlipText";

export default function Head() {
  return (
    <div className={styles.main}>

    <div className={styles.container}>
      <div className={styles.headText}>
        <div className={styles.textContent}>
          <h1 className={styles.sentence_one}>The next big</h1>
          <br></br>
          <h1 className={styles.sentence_two}>Safest Social Network</h1>
          <br></br>
          <FlipText></FlipText>

          <br></br>
          <h1 className={styles.sentence_four}>with the world now!</h1>
          <br></br>
          <Button></Button>
          <br></br>
        </div>
      </div>
      <div className={styles.handLImage}>
        {/* <p className={styles.txtOne}>😂</p>
        <p className={styles.txtTwo}>😉</p>
        <p className={styles.txtThree}>😛</p> */}
        <p className={styles.imojiOne}>                       😂</p>
        <p className={styles.imojiTwo}>                       😉</p>
        <p className={styles.imojiThree}>                      😛</p>
        <Image className={styles.image} src={HandImage} alt="Logo" />
      </div>
    </div>
    </div>
  );
}
