export const formatExpirationDate = (date: string): string => {
    let value = date.replace(/\D/g, "").slice(0, 4);

    if (value.length >= 1 && parseInt(value[0], 10) > 1) {
        value = `0${value}`;
    }

    if (value.length > 2) {
        value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    return value;
};