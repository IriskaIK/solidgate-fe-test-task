import React from "react";
import styles from "./ApplePayButton.module.css";
import applePayIcon from 'assets/apple-pay-logo.svg'
const ApplePayButton : React.FC = () => {
    return (
        <>
            <button className={styles.applePayButton}>
                <img src={applePayIcon} alt={'applePay'} />
            </button>
        </>
    )
}

export default ApplePayButton;