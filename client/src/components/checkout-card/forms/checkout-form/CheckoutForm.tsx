import React from "react";
import styles from './CheckoutForm.module.css'
import SubmitButton from "components/checkout-card/btns/sumbit-button/SubmitButton.tsx";
import CheckoutFormInput from "components/checkout-card/inputs/checkout-form-input/CheckoutFormInput.tsx";

interface CheckoutFormProps {
    price : number;
    currency : string;
}


const CheckoutForm : React.FC<CheckoutFormProps> = ({price, currency}) =>{
    return (
        <form>
            <CheckoutFormInput
                placeholder={'1234 1234 1234 1234'}
                label={'Card Number'}
            />
            <div className={styles.groupedInputs}>
                <CheckoutFormInput
                    placeholder={'MM/YY'}
                    label={'Expiration Date'}
                />
                <CheckoutFormInput
                    placeholder={'•••'}
                    label={'CVC'}
                    type={'password'}
                    tooltip={'This is the Card Verification Code.'}
                />
            </div>

            <SubmitButton title={`Pay ${price} ${currency}`}/>



        </form>
    )
}

export default CheckoutForm;