import React from "react";
import styles from "./Buttons.module.scss";

const Buttons = ({ types, onButtonClick }) => (
  <div className={styles.container}>
    {types.map((type, index) => (
      <button
        className={styles.button}
        key={`btn-${index}`}
        onClick={() => onButtonClick(type)}
      >
        {type}
      </button>
    ))}
  </div>
);

export default Buttons;
