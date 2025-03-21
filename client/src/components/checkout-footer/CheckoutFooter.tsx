import React from "react";
import styles from "./CheckoutFooter.module.css";
const CheckoutFooter : React.FC = () => {
    return (
        <div className={styles.footerContainer}>
            <span>
                Powered by <b>Solid</b>
            </span>
        </div>
    )
}

export default CheckoutFooter;