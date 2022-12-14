const products = [
    { name: "Mouse Logitech G502 Hero", price: 15739 },
    { name: "Mouse Logitech G600 Gaming Black Rgb", price: 17156 },
    { name: "Mouse Razer Deathadder v2 Lite", price: 11911 },
    { name: "Mouse Redragon M988 Storm Elite", price: 10658 },
    { name: "Keyboard Hyperx Alloy Core Rgb", price: 12471 },
    { name: "Keyboard Logitech G213 Prodigy Rgb Gaming", price: 18285 },
    { name: "Keyboard Genesis Thor 400 Rgb", price: 20174 },
    { name: "Keyboard Redragon K580 Vata Pro Rgb", price: 19999 },
    { name: "Headphones Redragon H350 Pandora 7.1 Black Rgb", price: 12157 },
    { name: "Headphones Logitech G335 Gaming Black", price: 19721 },
    { name: "Headphones Kingston Hyperx Cloud Stinger Core 7.1 Wireless Pc", price: 25108 },
    { name: "Headphones Genesis Selen 400 Wireless", price: 26301 }
];

console.log(products);

let desiredproduct = prompt("enter the type of product you want to buy");
const search = products.filter((product) => product.name.includes(desiredproduct));
console.log(search);

console.log(search[0].price+search[1].price+search[2].price+search[3].price)