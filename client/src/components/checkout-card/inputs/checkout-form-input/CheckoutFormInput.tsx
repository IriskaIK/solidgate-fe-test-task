import React, {useState} from "react";
import styles from "./CheckoutFormInput.module.css";
import tooltipIcon from 'assets/info-icon.svg'

interface CheckoutFormInputProps {
    placeholder?: string;
    label?: string;
    type?: React.HTMLInputTypeAttribute;
    tooltip?: string;

    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    errorMessage: string;
}

const CheckoutFormInput: React.FC<CheckoutFormInputProps> = ({placeholder, label, type, tooltip, onChange, value, errorMessage}) => {
    const [showTooltip, setShowTooltip] = useState<boolean>(false);

    return (
        <>
            <div>
                <label htmlFor={label} className={`${errorMessage ? styles.errorText : ''} ${styles.checkoutFormInputLabel}`}>
                    {label} {errorMessage ? `(${errorMessage})` : ''}
                </label>
                <div className={styles.inputWrapper}>
                    <input
                        type={type ? type : 'text'}
                        className={`${styles.checkoutFormInput} ${errorMessage ? styles.errorBorder : ''}`}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        maxLength={19}
                    />
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