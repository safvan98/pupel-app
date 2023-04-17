import React from "react";
import styles from "./Footer.module.css";
import logoImage from "../../src/logo-pepul.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.main}>
      i am footer
      <div className={styles.container}>
        <div>
          <div className={styles.image}>
            <div className={styles.logo}>
              <a href="#">
                <Image className={styles.img} src={logoImage} alt="Logo" />
              </a>
            </div>
            <div className={styles.terms}>
                <div className={styles.tOne}>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Pupel Chat</p>
              <h3>📷 🔗 🌀 📚</h3>
              </div>
            </div>
            <div className={styles.terms}>
              <h1>efiuqefueq</h1>
            </div>
            <div className={styles.terms}>
              <h1>efiuqefueq</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
