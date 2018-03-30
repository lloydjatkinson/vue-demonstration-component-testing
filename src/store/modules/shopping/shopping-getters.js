// @ts-check
const getters = {
    lowStockItems: state => state.availableProducts.filter(product => product.quantity > 10),
    basketItemCount: state => state.basketProducts.length,
    basketQuantityTotal: state =>
        state.basketProducts.reduce((accumulator, currentProduct) => {
            return accumulator + currentProduct.quantity;
        }, 0),
    basketPriceTotal: state =>
        state.basketProducts.reduce((accumulator, currentProduct) => {
            return accumulator + state.availableProducts.find(product => product.id === currentProduct.id).price * currentProduct.quantity;
        }, 0)
};

export default getters;