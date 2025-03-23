import React from "react";
import styles from "./BackButton.module.css";
import returnArrow from "assets/return-arrow.svg";
import {useTranslation} from "react-i18next";

const BackButton: React.FC = React.memo(() => {
    const { t } = useTranslation();



    return (
        <span className={styles.checkoutFormTitle}>
            <p className={styles.checkoutFormTitleText}>{t('checkoutTitle')}</p>
            <div className={styles.returnArrow}>
                <img src={returnArrow} alt={'return'}/>
                <p className={styles.returnText}>
                    {t('checkoutBackBtn')}
                </p>
            </div>
        </span>
    )
});

export default BackButton;