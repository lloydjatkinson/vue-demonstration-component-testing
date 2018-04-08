// @ts-check
const getters = {
    stockProducts: state => state.stockProducts,
    lowStockProducts: state => state.stockProducts.filter(product => product.quantity < 10),
    // TODO: Investigate possibility of abstracting reduce and passing in a function with logic - to reduce boilerplate.
    stockQuantity: state =>
        state.stockProducts.reduce((accumulator, currentProduct) => {
            return accumulator + currentProduct.quantity;
        }, 0),
    stockTotalPrice: state =>
        state.stockProducts.reduce((accumulator, currentProduct) => {
            return accumulator + currentProduct.price * currentProduct.quantity;
        }, 0),
    basketContainsProducts: state => state.basketProducts.length > 0,
    basketProducts: state => {
        const products = [];
        for(const basketProduct of state.basketProducts) {
            const match = state.stockProducts.find(p => p.id === basketProduct.id);
        
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
            return accumulator + state.stockProducts
                .find(product => product.id === currentProduct.id).price * currentProduct.quantity;
        }, 0)
};

export default getters;