import React, {useState} from "react";
import { useForm } from "react-hook-form";
import styles from './CheckoutForm.module.css';
import SubmitButton from "components/checkout-card/btns/sumbit-button/SubmitButton.tsx";
import CheckoutFormInput from "components/checkout-card/inputs/checkout-form-input/CheckoutFormInput.tsx";

import {validateCardNumber, validateExpirationDate, validateCVC} from "utils/validators";
import {formatCardCVC, formatCardNumber, formatExpirationDate} from "utils/formatters";

interface CheckoutFormProps {
    price: number;
    currency: string;
}

interface FormData {
    cardNumber: string;
    expirationDate: string;
    cardCVC: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ price, currency }) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>();
    const [processing, setProcessing] = useState(false);
    const onSubmit = (data: FormData) => {
        setProcessing(true)
        setTimeout(()=>{
            alert(`Payment successful!\nCard: ${data.cardNumber}\nCVC: ${data.cardCVC}\nExpiration: ${data.expirationDate}`);
            setProcessing(false)
        }, 3000)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CheckoutFormInput
                placeholder="1234 1234 1234 1234"
                label="Card Number"
                {...register("cardNumber", {
                    required: "Required",
                    validate: (value) => validateCardNumber(value.replace(/\s/g, "")) || "Invalid card number",
                    onChange: (e) => setValue("cardNumber", formatCardNumber(e.target.value)),
                })}
                errorMessage={errors.cardNumber?.message || ""}
            />

            <div className={styles.groupedInputs}>
                <CheckoutFormInput
                    placeholder="MM/YY"
                    label="Expiration Date"
                    {...register("expirationDate", {
                        required: "Required",
                        validate: (value) => validateExpirationDate(value) || "Invalid date",
                        onChange: (e) => setValue('expirationDate', formatExpirationDate(e.target.value)),
                    })}
                    errorMessage={errors.expirationDate?.message || ""}
                />

                <CheckoutFormInput
                    placeholder="•••"
                    label="CVC"
                    type="password"
                    tooltip="This is the Card Verification Code."
                    {...register("cardCVC", {
                        required: "Required",
                        validate: (value) => validateCVC(value) || "Invalid CVC",
                        onChange: (e) => setValue("cardCVC", formatCardCVC(e.target.value)),
                    })}
                    errorMessage={errors.cardCVC?.message || ""}
                />
            </div>

            <SubmitButton title={`Pay ${price} ${currency}`} processing={processing} />
        </form>
    );
};

export default CheckoutForm;
