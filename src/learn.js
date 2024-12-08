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
