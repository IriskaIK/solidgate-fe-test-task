import React, {useState} from "react";
import styles from './SubmitButton.module.css';
import loader from 'assets/Loader.svg'
interface SubmitButtonProps {
    title : string;
    processing : boolean;
}

const SubmitButton : React.FC<SubmitButtonProps> = ({title, processing}) => {

    return (
        <>

            <button
                type='submit'
                className={`${styles.payButton} ${processing ? styles.payProcessing : ''}`}
            >
                <span className={styles.payText}>{title}</span>
                <span className={`${styles.processing} ${processing ? styles.show : ''}`}>
                    <img src={loader} alt={''}/>
                    Processing payment
                </span>
            </button>
        </>
    )
}

export default SubmitButton;