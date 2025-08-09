//açoes do carrinho
//add item
async function addItem(userCart, item) {
    userCart.push(item);
}

//deletar item
async function deleteItem(userCart, name) {

    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        console.log(`Item ${name} removido com sucesso!`);
        userCart.splice(index, 1);
    }
}

//remover item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    if (indexFound == -1) {
        console.log("Item não encontrado!");
        return;
    }

    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        userCart[indexFound].subtotal = () => userCart[indexFound].price * userCart[indexFound].quantity;
        return;
    }

    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function displayCart(userCart) {
    console.log("lista de itens do carrinho:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}.${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal: R$ ${item.subtotal()}`);
    });
}
//total dos itens
async function calculateTotal(userCart) {
    console.log("Carrinho de compras:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\n O total é: ${result}`);
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };