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

//デフォルト引数
function ajax(url, method = 'GET') {
    return method;
}
ajax = ('google.com',null);
console.log(ajax);

ajax = ('google.com', 'POST');
console.log(ajax);

//Rest演算子
function add(...numbers){
    return numbers.reduce((sum, number)=>{
        return sum + number;
    }, 0);
}
console.log(add(1,2,3,4,5,6,9));

//spread演算子
const Colors = ['赤', '青'];
const addColors = ['黄', '緑'];

//...の後に続く配列を[]の中で展開してくれる , で配列同士を展開しながら繋げてくれる
const sumColors = [...Colors, ...addColors ];
console.log(sumColors);

//引数として扱うときRest演算子
//配列評価に対して使うときはSpread演算子
