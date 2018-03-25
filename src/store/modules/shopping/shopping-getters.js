// @ts-check
const getters = {
    lowStockItems: state => state.availableProducts.filter(product => product.inStock > 10),
    basketItemCount: state => state.basketItems.length,
    basketQuantityTotal: state =>
        state.basketItems.reduce((accumulator, currentProduct) => {
            return accumulator + currentProduct.quantity;
        }, 0),
    basketPriceTotal: state =>
        state.basketItems.reduce((accumulator, currentProduct) => {
            return accumulator + state.availableProducts.find(product => product.id === currentProduct.id).price * currentProduct.quantity;
        }, 0)
};

export default getters;