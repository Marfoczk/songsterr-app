import React from "react";
import styles from "./Buttons.module.scss";

const Buttons = ({ tabs, onButtonClick, selectedTab }) => (
  <div className={styles.container}>
    {tabs.map((tab, index) => (
      <button
        className={selectedTab === tab ? `${styles.button} ${styles.selectedButton}` : styles.button}
        key={`btn-${index}`}
        onClick={() => onButtonClick(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default Buttons;
