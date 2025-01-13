// HeroSection.js
import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => (
  <div className={styles.hero}>
    <h1>Welcome to the MetaWikiArt Blog</h1>
    <p>
      Your go-to source for insights, tutorials, and updates on Linked Open
      Data.
    </p>
    <a href="/about" className={styles.ctaButton}>
      Learn More
    </a>
  </div>
);

export default HeroSection;
