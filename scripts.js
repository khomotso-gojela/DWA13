
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

names.forEach(item => console.log(item))
console.log('')

names.forEach(item => console.log(`${item} ${provinces[names.indexOf(item)]}`))
console.log('')

const upperProvs = provinces.map(prov => prov.toUpperCase())
console.log(upperProvs)
console.log('')

const nameLen = names.map(name => name.length)
console.log(nameLen)
console.log('')

console.log(provinces.toSorted())
console.log('')

console.log(provinces.filter(prov => !prov.includes('Cape')).length)
console.log('')

console.log(names.map((item) => {
    return item.toLowerCase().includes('s')
}))

const obj = names.reduce((acc,current) => {
    return {
        ...acc,
        [current]: provinces[names.indexOf(current)]
    }    
},{})

console.log(obj)
console.log('')


const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

/*
Use forEach to console.log each product name to the console.
*/
console.log(
    products.forEach( ({ product }) => {
   return console.log(product)
})
)

//Use filter to filter out products that have a name longer than 5 characters.
console.log(
    products.filter((item) => item.product.length > 5)
)

/*
Using both filter and map. Convert all prices that are strings to numbers, and 
remove all products from the array that do not have prices. After this has been 
done then use reduce to calculate the combined price of all. remaining products.
*/
console.log(
    products.map((item) => {
        if (!isNaN(parseInt(item.price))) {
            return parseInt(item.price)
        }
    })
    .filter(item => item != undefined)
    .reduce((acc,curr) => acc + curr)
)

/*
Use reduce to concatenate all product names to create the following string: 
banana, mango, potato, avocado, coffee and tea.
*/
console.log(
    products.reduce((acc,curr) => acc + `${curr.product} `,'')
)

/*
Use reduce to calculate both the highest and lowest-priced items. The names 
should be returned as the following string: Highest: coffee. Lowest: banana.
*/
console.log(
    ` Highest: ${products.reduce((acc,curr) => {
    
        if (isNaN(parseInt(curr.price))) {
            return acc
        } else if (parseInt(curr.price) >= acc.price) {
            return curr
        } else {
            return acc
        }
    }).product}`,

    ` Lowest: ${products.reduce((acc,curr) => {
    
        if (isNaN(parseInt(curr.price))) {
            return acc
        } else if (parseInt(curr.price) <= acc.price) {
            return curr
        } else {
            return acc
        }
    }).product}`
)

/*changing product to name and price to cost*/
console.log(
    Object.entries(products).reduce((acc,curr) => {
    return [...acc,{ name:curr[1].product,cost:curr[1].price }]
},[])
)
