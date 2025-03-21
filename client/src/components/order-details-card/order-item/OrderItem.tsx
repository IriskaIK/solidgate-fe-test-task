import React from "react";
import styles from 'components/order-details-card/order-item/OrderItem.module.css'

interface OrderItemProps {
    title : string;
    subtitle : string;
}

const OrderItem : React.FC<OrderItemProps> = ({title, subtitle}) => {
    return (
        <>
            <div className={styles.orderItem}>
                <p className={styles.orderItemTitle}>
                    {title}
                </p>

                <p className={styles.orderItemDescription}>
                    {subtitle}
                </p>
            </div>

        </>
    )
}

export default OrderItem;