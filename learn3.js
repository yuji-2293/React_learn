//オブジェクトリテラル
function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue(){
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
priceForTitle(title) {
    return this.inventory.find(book => book.title === title).price;
}
};
}

const inventory = [
    { title: 'ハリ-ポッター', price: 1000 },
    { title: 'javascript入門', price: 1500 }
];
const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('ハリ-ポッター'));

//
