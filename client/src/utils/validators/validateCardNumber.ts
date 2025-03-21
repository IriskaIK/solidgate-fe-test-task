
export const validateCardNumber = (cardNumber: string) : boolean => {
    const sanitized = cardNumber.replace(/\D/g, "");
    if(sanitized.length !== 16) return false;
    return true;
}