export const validateCVC = (cvc: string) => {
    const sanitized = cvc.replace(/\D/g, "");
    if (!/^\d+$/.test(sanitized)) return false;

    const length = sanitized.length;
    return length === 3;
}