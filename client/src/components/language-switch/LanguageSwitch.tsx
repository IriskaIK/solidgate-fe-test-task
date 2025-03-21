import React from "react";
import styles from "./LanguageSwitch.module.css";

const LanguageSwitch : React.FC = () => {
    return (
        <div className={styles.languageSwitchContainer}>
            <button className={`${styles.languageSwitchButton} ${styles.selected}`}>
                Eng
            </button>
            <button className={styles.languageSwitchButton}>
                Укр
            </button>

        </div>
    )
}

export default LanguageSwitch;