export const getTotal = (basket) => {
    return (basket.reduce((n, { price }) => n + parseFloat(price), 0));
}