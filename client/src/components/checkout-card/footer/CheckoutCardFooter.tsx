import React from "react";
import styles from "./CheckoutCardFooter.module.css";

interface CheckoutCardFooterProps {
    children : React.ReactNode
}

const CheckoutCardFooter : React.FC<CheckoutCardFooterProps> = React.memo(({children}) => {
    return (
        <div className={styles.checkoutCardFooter}>
            <p>
                {children}
            </p>
        </div>
    )
});

export default CheckoutCardFooter;