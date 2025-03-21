
export const formatCardNumber = (value : string) : string =>{
    return value.replace(/\D/g, "")
        .slice(0, 19)
        .replace(/(\d{4})/g, "$1 ")
        .trim();
}