let computer = {cpu: 12}
let lenovo = {screen : "HD"}
let dell = {}
// console.log(`computer `, computer.__proto__);

let genericCar = { tyres: 4}
let tesla = {
    driver: "AI"
}
Object.setPrototypeOf(tesla, genericCar)
console.log(`tesla` , Object.getPrototypeOf(tesla));

