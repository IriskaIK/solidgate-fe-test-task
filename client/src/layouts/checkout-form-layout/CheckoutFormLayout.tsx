import React from 'react'
import styles from './CheckoutFormLayout.module.css'
import CheckoutCard from "components/checkout-card/CheckoutCard.tsx";
import OrderDetailsCard from "components/order-details-card/OrderDetailsCard.tsx";
import LanguageSwitch from "components/language-switch/LanguageSwitch.tsx";
import CheckoutFooter from "components/checkout-footer/CheckoutFooter.tsx";


const CheckoutFormLayout: React.FC = () => {
    return (
        <div className={styles.wrapper}>

            <LanguageSwitch/>

            <div className={styles.checkoutContainer}>
                <CheckoutCard
                    offerTitle={'5 days free'}
                    offerSubtitle={'then 299.99 UAH per 14 days'}
                    price={299.99}
                    currency={'UAH'}
                />
                <OrderDetailsCard
                    title={'Order info <= 100 char.'}
                    description={'Description <= 400 char.'}
                    totalPrice={299.99}
                    currency={'UAH'}
                    items={[
                        {
                            id: 1,
                            title: 'Lamel Professional Smart Skin Compact Powder',
                            subtitle: 'Пудра для обличчя'
                        }
                    ]}
                />
            </div>

            <CheckoutFooter/>
        </div>
    )
}

export default CheckoutFormLayout;