import React, {useState} from "react";
import styles from "./LanguageSwitch.module.css";
import { useTranslation } from 'react-i18next';
import {Languages} from "i18n.ts";

const LanguageSwitch : React.FC = React.memo(() => {
    const { i18n } = useTranslation();
    const [active, setActive] = useState<Languages>("eng");
    const changeLanguage = (lng: Languages) => {
        i18n.changeLanguage(lng);
        setActive(lng)
    };


    return (
        <div className={styles.languageSwitchContainer}>
            <button
                onClick={()=> changeLanguage('eng')}
                className={`${styles.languageSwitchButton} ${active === "eng" && styles.selected}`}
            >
                Eng
            </button>
            <button
                onClick={()=> changeLanguage('ua')}
                className={`${styles.languageSwitchButton} ${active === "ua" && styles.selected}`}
            >
                Укр
            </button>

        </div>
    )
});

export default LanguageSwitch;