// @ts-check
const state = {
    availableProducts: [
        { id: 0, name: 'Chocolate Liqueur - Godet White', inStock: 15, price: 5 },
        { id: 1, name: 'Pastry - Mini French Pastries', inStock: 6, price: 8 },
        { id: 2, name: 'Milkettes - 2%', inStock: 6, price: 10 },
        { id: 3, name: 'Galliano', inStock: 40, price: 20 },
        { id: 4, name: 'Ham Black Forest', inStock: 19, price: 18 },
        { id: 5, name: 'Mushroom - Portebello', inStock: 27, price: 7 },
        { id: 6, name: 'Shrimp - Black Tiger 16/20', inStock: 22, price: 20 },
        { id: 7, name: 'Arctic Char - Fillets', inStock: 20, price: 41 },
        { id: 8, name: 'Bouq All Italian - Primerba', inStock: 68, price: 22 },
        { id: 9, name: 'Yogurt - Plain', inStock: 48, price: 14 },
        { id: 10, name: 'Wine - Red, Wolf Blass, Yellow', inStock: 0, price: 9 },
        { id: 11, name: 'Pork - Tenderloin, Fresh', inStock: 11, price: 6 },
        { id: 12, name: 'Cranberries - Dry', inStock: 0, price: 33 },
        { id: 13, name: 'Langers - Ruby Red Grapfruit', inStock: 39, price: 10 },
        { id: 14, name: 'Almonds Ground Blanched', inStock: 112, price: 2 },
        { id: 15, name: 'Beer - Maudite', inStock: 40, price: 4 },
        { id: 16, name: 'Wine - White, Antinore Orvieto', inStock: 7, price: 19 },
        { id: 17, name: 'Sultanas', inStock: 85, price: 2 },
        { id: 18, name: 'Lemonade - Island Tea, 591 Ml', inStock: 10, price: 3 },
        { id: 19, name: 'Appetizer - Spring Roll, Veg', inStock: 5, price: 4 }
    ],
    // discounts: [
    //     { id: 3, }
    // ],
    // Set initial state to already contain some products.
    basketItems: [
        { id: 3, quantity: 1 },
        { id: 16, quantity: 7 },
        { id: 7, quantity: 3 },
        { id: 8, quantity: 3 },
        { id: 10, quantity: 5 }
    ]
};

export default state;