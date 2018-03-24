const getters = {
    lowStockItems: state => state.availableProducts.filter(product => product.inStock > 10),
    basketItemCount: state => state.basketItems.length,
    basketQuantityTotal: state =>
        state.basketItems.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.quantity;
        }, 0),
    basketPriceTotal: state =>
        state.basketItems.reduce((accumulator, currentValue) => {
            return accumulator + state.availableProducts.find(product => product.id === currentValue.id).price * currentValue.quantity;
        }, 0)
};

export default getters;