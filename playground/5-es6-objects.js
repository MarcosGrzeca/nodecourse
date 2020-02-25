const name = "Andrew"
const userAge = 27
const user = {
    name,
    age: userAge,
    location: "Philadelphia"
}

// console.log(user)

const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
}


const {label, price, stock} = product;

// const label = product.label;
// const stock = product.stock;
// const price = product.price;
// const salePrice = product.salePrice;

// console.log(label)

const transaction = (type, {label, stock}) => {
    console.log(label)
}

transaction("order", product)