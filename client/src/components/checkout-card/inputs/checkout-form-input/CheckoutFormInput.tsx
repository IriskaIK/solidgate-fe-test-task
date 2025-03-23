import React, { useState } from "react";
import styles from "./CheckoutFormInput.module.css";
import tooltipIcon from 'assets/info-icon.svg';

interface CheckoutFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    label?: string;
    tooltip?: string;
    errorMessage?: string;
}

const CheckoutFormInput = React.forwardRef<HTMLInputElement, CheckoutFormInputProps>(
    ({ placeholder, label, type = "text", tooltip, errorMessage, ...rest }, ref) => {
        const [showTooltip, setShowTooltip] = useState<boolean>(false);

        return (
            <div>
                <label className={`${errorMessage ? styles.errorText : ''} ${styles.checkoutFormInputLabel}`}>
                    {label} {errorMessage ? `(${errorMessage})` : ''}
                </label>
                <div className={styles.inputWrapper}>
                    <input
                        ref={ref}
                        type={type}
                        className={`${styles.checkoutFormInput} ${errorMessage ? styles.errorBorder : ''}`}
                        placeholder={placeholder}
                        maxLength={19}
                        {...rest}
                    />
                    {tooltip && (
                        <>
                            <img
                                className={styles.tooltipButton}
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                                src={tooltipIcon}
                                alt="info"
                            />
                            {showTooltip && <div className={styles.tooltip}>{tooltip}</div>}
                        </>
                    )}
                </div>
            </div>
        );
    }
);

export default CheckoutFormInput;
