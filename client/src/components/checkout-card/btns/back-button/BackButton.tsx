import React from "react";
import styles from "./BackButton.module.css";
import returnArrow from "assets/return-arrow.svg";

const BackButton: React.FC = React.memo(() => {
    return (
        <span className={styles.checkoutFormTitle}>
            <p className={styles.checkoutFormTitleText}>Checkout</p>
            <div className={styles.returnArrow}>
                <img src={returnArrow} alt={'return'}/>
                <p className={styles.returnText}>
                    Back
                </p>
            </div>
        </span>
    )
});

export default BackButton;