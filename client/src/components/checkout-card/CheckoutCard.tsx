import React from "react";
import styles from 'components/checkout-card/CheckoutCard.module.css'
import ApplePayButton from "components/checkout-card/btns/apple-pay-button/ApplePayButton.tsx";
import SectionDivider from "components/section-divider/SectionDivider.tsx";
import CheckoutForm from "components/checkout-card/forms/checkout-form/CheckoutForm.tsx";
import CheckoutCardFooter from "components/checkout-card/footer/CheckoutCardFooter.tsx";
import returnArrow from "assets/return-arrow.svg"
import BackButton from "components/checkout-card/btns/back-button/BackButton.tsx";

interface CheckoutFormProps {
    offerTitle: string,
    offerSubtitle: string,
    price: number,
    currency: string,
}

const CheckoutCard: React.FC<CheckoutFormProps> = ({offerTitle, offerSubtitle, price, currency}) => {
    return (
        <div className={styles.checkoutForm}>

            <BackButton/>

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

            <div className={styles.footer}>
                <CheckoutCardFooter>
                    <>
                        You'll have your <b>Plan Pro during 1 year</b>. After this period of time, your plan will be <b>automatically
                        renewed</b> with its original price without any discounts applied.
                    </>
                </CheckoutCardFooter>
            </div>

        </div>
    )
}

export default CheckoutCard;