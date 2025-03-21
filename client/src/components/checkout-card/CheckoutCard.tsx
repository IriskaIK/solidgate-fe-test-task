import React from "react";
import styles from 'components/checkout-card/CheckoutCard.module.css'
import ApplePayButton from "components/checkout-card/btns/apple-pay-button/ApplePayButton.tsx";
import SectionDivider from "components/section-divider/SectionDivider.tsx";
import CheckoutForm from "components/checkout-card/forms/checkout-form/CheckoutForm.tsx";

interface CheckoutFormProps {
    offerTitle : string,
    offerSubtitle : string,
    price : number,
    currency  : string,
}

const CheckoutCard : React.FC<CheckoutFormProps> = ({offerTitle, offerSubtitle, price, currency}) => {
    return (
        <div className={styles.checkoutForm}>
            <span className={styles.checkoutFormTitle}>
                Checkout
            </span>
            <div className={styles.checkoutFormOfferContent}>
                <p className={styles.checkoutFormOfferTitle}>
                    {offerTitle}
                </p>
                <p className={styles.checkoutFormOfferSubtitle}>
                    {offerSubtitle}
                </p>
            </div>

            <ApplePayButton/>
            <SectionDivider title={'or pay with card'} mt={'24px'} mb={'16px'}/>

            <CheckoutForm price={price} currency={currency}/>


        </div>
    )
}

export default CheckoutCard;