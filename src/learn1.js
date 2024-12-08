// 配列の便利メソッド

const { type } = require("@testing-library/user-event/dist/cjs/utility/type.js");

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
    {name: 'きゅうり',type:' 野菜',quantity: 0, price: 1 },
    {name: 'バナナ', type: 'フルーツ',quantity: 10, price: 10 },
    {name: 'セロリ', type: '野菜',quantity: 20, price: 100 },
    {name: 'オレンジ', type: 'フルーツ',quantity: 32, price: 200 }
];
products.filter(function(product){
    return product.type === 'フルーツ'
    && product.quantity > 10
    && product.price > 100;
});
//typeがフルーツの時trueを返す

var post = { id: 4, title: '初めての投稿'};
var comments = [
    { postId: 4, content: '明日のご飯'},
    { postId: 3, content: '昨日のご飯'},
    { postId: 4, content: '明後日のご飯'}
];

function commentsForPost(post, comments){
    return comments.filter(function(comment){
        return comment.postId === post.id;
    });
}
commentsForPost(post, comments);

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
//
//値の条件付き絞り込み
//数字の配列があるので、50より大きい数字だけに絞り込んで新しい配列に格納してください。新しい配列の変数名は「filteredNumbers」としてください。
var filteredNumbers = numbers.filter(function(number){
    return number > 50;
});
console.log(filteredNumbers);

//reject関数の作成
//rejectはfilterとは逆に条件に当てはまる要素を配列に含めない
function reject(array, iteratorFunction) {
    const obj = array.filter(function(item){
        return iteratorFunction(item) === false;
    });
    return obj;
}

let ages = [10, 29, 49];
let teen = reject(ages,function(age){
    return age >= 20;
});
console.log(teen);

//findメソッド
var users = [
    { name: '太郎' },
    { name: '次郎', id: 1 },
    { name: '三郎' }
];
var man = users.find(function(user) {
    return user.name === '次郎';
});
console.log(man);

//findWhereメソッド
//
function findWhere(array, criteria) {
    const key = Object.keys(criteria)[0];
    return array.find(function(item){
        return item[key] === criteria[key];
    });
}

let members = [
    { id:  1, age: 12},
    { id:  2, age: 13},
    { id:  3, age: 14},
    { id:  4, age: 25}
];
var men = findWhere(members, { age: 25});
console.log(men);
// findWhere(ladders, { height: '6m' });
// 上のように書けたらコールバック関数を書かずにすむので便利です。ここで { height: '6m' } は検索条件になります。はしごの高さが6mのものを探したいときに使います。
// この演習では、上で使用した「findWhere」関数を実装してください。「findWhere」関数の戻り値は、検索条件に一致したオブジェクトになります。
// よって、下記のようになります。
// var ladders = [
//  { id: 1, height: 20 },
//  { id: 3, height: 25 }
// ];
// findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }
// ヒント：おそらく一番難しいのは検索条件のオブジェクトのキー名を取得するところです。
//これは Object.keys(criteria)[0]  を使うことで、オブジェクト内のキーを取得することができます。例えば Object.keys({ height: '6m' }) とした場合、 'height' が取得できます。
//キーがわかったところで、対象となるオブジェクトにそのキーと値があるかどうかを element[property] === criteria[property] で確認することができます。
