import type { Product } from "./06-funcion-destructuring";
import { taxCalculation } from "./06-funcion-destructuring";

const shpppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100.0
    },
    {
        description: 'iPad',
        price: 150.0
    }
];

// Tax 0.15
const [total, tax] = taxCalculation({ products: shpppingCart, tax: 0.15});
console.log('Total:', total);
console.log('Tax:', tax);
// export {};