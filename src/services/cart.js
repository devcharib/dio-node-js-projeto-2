//açoes do carrinho

//add item
async function addItem(userCart, item) {
    userCart.push(item);
}

//deletar item
async function deleteItem(userCart, name) {
    
}

//remover item
async function removeItem(userCart, index) {

}

//total dos itens
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`O total é: ${result}`);
}

export { addItem, deleteItem, removeItem, calculateTotal };