import React from 'react'
import styles from './CheckoutFormLayout.module.css'
import CheckoutCard from "components/checkout-card/CheckoutCard.tsx";
import OrderDetailsCard from "components/order-details-card/OrderDetailsCard.tsx";
import LanguageSwitch from "components/language-switch/LanguageSwitch.tsx";
import CheckoutFooter from "components/checkout-footer/CheckoutFooter.tsx";
import {IOrderItem} from "types/orderItem.type.ts";

interface CheckoutFormLayoutProps {
    offerTitle: string,
    offerSubtitle: string,
    price: number,
    currency: string,

    orderTitle: string,
    orderDescription: string,
    items: IOrderItem[]
}


const CheckoutFormLayout: React.FC<CheckoutFormLayoutProps> = React.memo(({
                                                                   offerTitle,
                                                                   offerSubtitle,
                                                                   price,
                                                                   currency,
                                                                   orderTitle,
                                                                   orderDescription,
                                                                   items
                                                               }) => {
    return (
        <div className={styles.wrapper}>

            <LanguageSwitch/>

            <div className={styles.checkoutContainer}>
                <CheckoutCard
                    offerTitle={offerTitle}
                    offerSubtitle={offerSubtitle}
                    price={price}
                    currency={currency}
                />
                <OrderDetailsCard
                    title={orderTitle}
                    description={orderDescription}
                    totalPrice={price}
                    currency={currency}
                    items={items}
                />
            </div>

            <CheckoutFooter/>
        </div>
    )
});

export default CheckoutFormLayout;