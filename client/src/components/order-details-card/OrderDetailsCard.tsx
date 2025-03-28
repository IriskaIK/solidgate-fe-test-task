import React from "react";
import styles from './OrderDetailsCard.module.css'
import SectionDivider from "components/section-divider/SectionDivider.tsx";
import {IOrderItem} from "types/orderItem.type.ts";
import OrderItem from "components/order-details-card/order-item/OrderItem.tsx";



interface OrderDetailsCardProps {
    title: string,
    description: string,
    items: IOrderItem[],
    totalPrice: number,
    currency: string,
}

const OrderDetailsCard: React.FC<OrderDetailsCardProps> = ({title, description, items, totalPrice, currency}) => {
    return (
        <div className={styles.orderDetailsCard}>
            <p className={styles.orderDetailsCardTitle}>
                {title}
            </p>
            <p className={styles.orderDetailsCardSubtitle}>
                {description}
            </p>

            <SectionDivider mt={'16px'} mb={'16px'}/>
            {items.map(item => (
                <OrderItem title={item.title} subtitle={item.subtitle} key={item.id}/>
            ))}
            <SectionDivider mt={'16px'} mb={'16px'}/>

            <p className={styles.orderDetailsCardTotalPrice}>
                Total {totalPrice} {currency}
            </p>

        </div>
    )
}

export default OrderDetailsCard;