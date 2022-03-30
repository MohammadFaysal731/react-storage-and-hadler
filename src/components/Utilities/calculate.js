const add = (first, second) => {
    return first + second
}

const multiply = (first, second) => {
    return first * second
}

// const numbers = [20, 24, 235, 65, 89];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0)


// const items = [
//     { id: 1, name: 'Alta', price: 100 },
//     { id: 2, name: 'Palis', price: 200 },
//     { id: 3, name: 'Malis', price: 300 },
//     { id: 4, name: 'Balis', price: 400 },
//     { id: 5, name: 'Nalis', price: 500 }
// ];
// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal== items.reduce(itemSumReducer, 0);

const getTotalPrice = products => {
    const reduce = (previous, current) => previous + current.price;
    const total = products.reduce(reduce, 0);
    return total;
}

export { add, multiply, getTotalPrice as getTotal };
// export default add;