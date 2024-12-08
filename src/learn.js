// 配列の便利メソッド
// forEach
var colors = ['red','blue','green']

for(var i = 0; i < colors.length; i ++){
    console.log(colors[i]);
}//典型なfor文

colors.forEach(function(color) {
    console.log(color);
});
//配列colorsの中身を一つずつコールバック関数に渡すことができる
//コールバック関数 = 上記の場合だとfunction...の部分

//数字の配列を用意する
var numbers = [ 1,2,3,4,5];

//合計を保持する変数を用意する
var sum = 0;
function adder(number){
    sum += number;
}
//配列の一つ一つの数字を合計に足す
numbers.forEach(adder);
//合計を表示する

//複数の値の処理
//下の配列には画像の大きさを表すオブジェクトが複数格納してあります。forEachメソッドを使って画像の面積を求め、「areas」という新しい配列に格納してください。面積の計算方法は「image.height * image.width」となります。
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
var areas = [];

images.forEach(function(image){
    areas.push(image.height * image.width);
});
console.log(areas);
//配列.forEach(配列内の一つ一つに行いたいコールバック関数)
// areas.pushでareas配列に格納できる

//---------------------------------------------------------------------------------------

//map関数
var cars = [
    { type: '軽動車', price: '安い' },
    { type: '高級車', price: '高い' }
];
var prices = cars.map(function(car) {
    return car.price;
});
console.log(prices);
//---------------------------------------------------------------------------------------

//pluck関数
// colorプロパティの値だけを抜き取って、['赤', '青', '黄色']という、
// 色の名前だけが含まれた配列がcolorNamesに入るようにpluck関数を実装してください！
function pluck(array, property) {
    // 引数として渡された array（オブジェクトの配列）を map メソッドで処理します。
    const obj = array.map(function(item) {
        // 各オブジェクトから指定されたプロパティ名（property）の値を返します。
        return item[property]; // 例: property が 'color' の場合、オブジェクトの color の値を取得します。
    });
    // map の結果（指定プロパティの値を含む配列）を関数の返り値として返します。
    return obj;
}

// オブジェクトの配列
var colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }];

// 'color' プロパティの値を抽出して新しい配列を作成します。
var colorNames = pluck(colorObjects, 'color');

console.log(colorNames); // ['赤', '青', '黄色']

//filter関数
var products = [
    {name: 'きゅうり',tyupe:' 野菜',quantity: 0, price: 1 },
    {name: 'バナナ', tyupe: 'フルーツ',quantity: 10, price: 10 },
    {name: 'セロリ', tyupe: '野菜',quantity: 20, price: 100 },
    {name: 'オレンジ', tyupe: 'フルーツ',quantity: 32, price: 200 }
];
products.filter(function(product){
    return product.type === 'フルーツ'
    && product.quantity > 10
    && product.price > 100;
});
//typeがフルーツの時trueを返す
