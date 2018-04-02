// @ts-check
const getters = {
    availableProducts: state => state.availableProducts,
    lowStockProducts: state => state.availableProducts.filter(product => product.quantity < 10),
    basketProducts: state => {
        const products = [];
        for(const basketProduct of state.basketProducts) {
            const match = state.availableProducts.find(p => p.id === basketProduct.id);
        
            if (match) {
                products.push({
                    id: basketProduct.id,
                    name: match.name,
                    quantity: basketProduct.quantity,
                    price: match.price,
                    total: match.price * basketProduct.quantity
                });
            } else {
                // If this happens then the design and tests do not correctly cover all cases.
                throw new TypeError('Unknown ID.');
            }
        }

        return products;
    },
    basketProductCount: state => state.basketProducts.length,
    basketQuantityTotal: state =>
        state.basketProducts.reduce((accumulator, currentProduct) => {
            return accumulator + currentProduct.quantity;
        }, 0),
    basketPriceTotal: state =>
        state.basketProducts.reduce((accumulator, currentProduct) => {
            return accumulator + state.availableProducts
                .find(product => product.id === currentProduct.id).price * currentProduct.quantity;
        }, 0)
};

export default getters;