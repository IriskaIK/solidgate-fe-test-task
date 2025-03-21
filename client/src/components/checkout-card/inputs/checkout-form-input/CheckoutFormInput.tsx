import React, {useState} from "react";
import styles from "./CheckoutFormInput.module.css";
import tooltipIcon from 'assets/info-icon.svg'

interface CheckoutFormInputProps {
    placeholder?: string;
    label?: string;
    type?: React.HTMLInputTypeAttribute;
    tooltip?: string;
}

const CheckoutFormInput: React.FC<CheckoutFormInputProps> = ({placeholder, label, type, tooltip}) => {
    const [showTooltip, setShowTooltip] = useState<boolean>(false);

    return (
        <>
            <div>
                <label htmlFor={label} className={styles.checkoutFormInputLabel}>
                    {label}
                </label>
                <div className={styles.inputWrapper}>
                    <input type={type ? type : 'text'} className={styles.checkoutFormInput} placeholder={placeholder}/>
                    {tooltip &&
                        (
                            <>
                                <img
                                    className={styles.tooltipButton}
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                    src={tooltipIcon} alt={'info'}/>
                                {showTooltip && (
                                    <div className={styles.tooltip}>
                                        {tooltip}
                                    </div>
                                )}
                            </>

                        )
                    }
                </div>

            </div>
        </>
    )
}

export default CheckoutFormInput;