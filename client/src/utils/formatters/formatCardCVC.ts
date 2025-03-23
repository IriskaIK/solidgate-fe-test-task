
export const formatCardCVC = (cvc: string) => cvc.replace(/\D/g, "").slice(0, 3);