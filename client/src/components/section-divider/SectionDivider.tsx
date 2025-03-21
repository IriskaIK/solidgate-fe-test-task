import React from "react";
import styles from './SectionDivider.module.css'
interface SectionDividerProps {
    title?: string;
    mt?: string;
    mb?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = (
    {
        title,
        mt = "16px",
        mb = "16px",
    }) => {
    if (title) {
        return (
            <div className={styles.dividerContainer} style={{ marginTop : mt, marginBottom : mb }}>
                <div className={styles.dividerLine}></div>
                <span className={styles.dividerText}>{title}</span>
                <div className={styles.dividerLine}></div>
            </div>
        )
    }
    return (
        <div className={styles.dividerContainer} style={{ marginTop : mt, marginBottom : mb }}>
            <div className={styles.dividerLine}></div>
        </div>
    )

}

export default SectionDivider;