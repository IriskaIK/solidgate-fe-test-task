import React, {useState} from "react";
import styles from './CheckoutForm.module.css'
import SubmitButton from "components/checkout-card/btns/sumbit-button/SubmitButton.tsx";
import CheckoutFormInput from "components/checkout-card/inputs/checkout-form-input/CheckoutFormInput.tsx";
import {formatCardNumber} from "utils/formatCardNumber.ts";
import {validateCardNumber} from "utils/validators/validateCardNumber.ts";
import {validateExpirationDate} from "utils/validators/validateExpirationDate.ts";
import {validateCVC} from "utils/validators/validateCVC.ts";

interface CheckoutFormProps {
    price : number;
    currency : string;
}


const CheckoutForm : React.FC<CheckoutFormProps> = ({price, currency}) =>{

    const [cardNumber, setCardNumber] = useState<string>("");
    const [cardNumberValidationError, setCardNumberValidationError] = useState<string>("");

    const [expirationDate, setExpirationDate] = useState<string>("");
    const [expirationDateValidationError, setExpirationDateValidationError] = useState<string>("");

    const [cardCVC, setCardCVC] = useState<string>("");
    const [cardCVCValidationError, setCardCVCValidationError] = useState<string>("");


    const [processing, setProcessing] = useState<boolean>(false);

    const onCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let rawValue = e.target.value.replace(/\D/g, "").slice(0, 16); // Allow only digits, max 16
        let formattedValue = formatCardNumber(rawValue);

        setCardNumber(formattedValue);
        setCardNumberValidationError(validateCardNumber(rawValue) ? "" : "Invalid card number");
    }

    const onExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "").slice(0, 4);
        if (value.length > 2) value = `${value.slice(0, 2)}/${value.slice(2)}`;

        setExpirationDate(value);
        setExpirationDateValidationError(validateExpirationDate(value) ? "" : "Invalid date")
    }

    const onCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, 3);

        setCardCVC(value);
        setCardCVCValidationError(validateCVC(value) ? "" : "Invalid CVC")
    }



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isCardValid = validateCardNumber(cardNumber.replace(/\s/g, ""));
        const isCVCValid = validateCVC(cardCVC);
        const isExpirationValid = validateExpirationDate(expirationDate);

        setCardCVCValidationError(isCardValid ? "" : "Invalid CVC")
        setCardNumberValidationError(isCardValid ? "" : "Invalid card number")
        setExpirationDateValidationError(isExpirationValid ? "" : "Invalid date")

        if (isCardValid && isCVCValid && isExpirationValid) {
            setProcessing(true);
            setTimeout(()=>{
                alert(`Payment successful!\nCard: ${cardNumber}\nCVC: ${cardCVC}\nExpiration: ${expirationDate}`);
                setProcessing(false)

                setCardNumber('')
                setCardCVC('')
                setExpirationDate('')
            }, 1000)
        }
    };




    return (
        <form onSubmit={handleSubmit}>
            <CheckoutFormInput
                placeholder={'1234 1234 1234 1234'}
                label={'Card Number'}
                onChange={onCardNumberChange}
                value={cardNumber}
                errorMessage={cardNumberValidationError}
            />
            <div className={styles.groupedInputs}>
                <CheckoutFormInput
                    placeholder={'MM/YY'}
                    label={'Expiration Date'}
                    onChange={onExpirationDateChange}
                    value={expirationDate}
                    errorMessage={expirationDateValidationError}
                />
                <CheckoutFormInput
                    onChange={onCVCChange}
                    value={cardCVC}
                    errorMessage={cardCVCValidationError}
                    placeholder={'•••'}
                    label={'CVC'}
                    type={'password'}
                    tooltip={'This is the Card Verification Code.'}
                />
            </div>

            <SubmitButton title={`Pay ${price} ${currency}`} processing={processing}/>



        </form>
    )
}

export default CheckoutForm;