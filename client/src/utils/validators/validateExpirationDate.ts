
export const validateExpirationDate = (expiration: string) : boolean => {
    if (!/^\d{2}\/\d{2}$/.test(expiration)) return false;

    const [monthStr, yearStr] = expiration.split("/");
    const month = parseInt(monthStr, 10);
    const year = parseInt(yearStr, 10) + 2000;

    if (month < 1 || month > 12) return false;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    return year > currentYear || (year === currentYear && month >= currentMonth);
}