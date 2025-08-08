// carrinho de compras
import * as cartService from "./services/cart.js";
import * as item from "./services/item.js";

const myCart = [];
const myWhislist = [];

console.log("Bem vindo ao carrinho de compras!");

const item1 = await item.createItem("Camisa", 50.99, 10);
const item2 = await item.createItem("Calça", 100.50, 5);
const item3 = await item.createItem("Tênis", 150.35, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myWhislist, item3);

console.log("Carrinho de compras:");
await cartService.calculateTotal(myCart);