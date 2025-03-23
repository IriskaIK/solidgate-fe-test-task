
export const validateCardNumber = (cardNumber: string) : boolean => {
    const sanitized = cardNumber.replace(/\D/g, "");
    return sanitized.length === 16;

}