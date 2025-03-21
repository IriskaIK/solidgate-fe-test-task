import React from "react";
import styles from './SubmitButton.module.css';

interface SubmitButtonProps {
    title : string;
}

const SubmitButton : React.FC<SubmitButtonProps> = ({title}) => {
    return (
        <>
            <button type={'submit'} className={styles.submitButton}>
                {title}
            </button>
        </>
    )
}

export default SubmitButton;