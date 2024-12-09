//everyとsome
var names = [
    'けん',
    'しんじ',
    'まきこ'
];
var man = names.every(function(name){
    return name.length >= 3;
});
var men = names.some(function(name){
    return name.length >= 3;
});
console.log(man);
console.log(men);

//reduceメソッド
var numbars = [ 10, 20, 30]
var sum = 0

var num = numbars.reduce(function(sum, numbar){
    return sum + numbar;
}, 1000);
console.log(num);

var primary = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'yellow' }
];
var array = primary.reduce(function(item, primary){
    item.push(primary.color)
    return item;
},[]);
console.log(array);

function balance(string){
    return !string.split('').reduce(function(item, char){
        if (item < 0) { return item; }
        if (char === '(') { return item + 1; }
        if (char === ')') { return item - 1; }

    }, 0);
}
var sum = balance('(');
console.log(sum);
//
var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];

  var deskTypes = desks.reduce(function(sum, desk) {
    if (desk.type === 'sitting') {
      sum.sitting++;
    } else {
      sum.standing++;
    }

    return sum;
  }, { sitting: 0, standing: 0 });
  console.log(deskTypes);

//uniquメソッド
let atoes = ['a','a','b','c',];
function unique(array){
    return array.reduce(function(prev, unit){
        let isInclude = prev.find(function(item){
            return unit === item;
        })
        if(!isInclude){
            prev.push(unit);
        }
        return prev;
    }, [])
}

unique(atoes);
console.log(unique(atoes));

//constとletで変数の宣言
const name = '太郎';
let title = 'エンジニア';
// name = '次郎';
//→constで宣言した値に再宣言するとエラーが起きる Uncaught TypeError TypeError: Assignment to constant variable.

//アロー関数
const add = (a,b) => {
    return a + b;
}
add(1,2);

const sin = (d,f) => d + f;
//１つしか評価項目がない場合、returnの行を暗黙的にすることができる
//あくまでも可読性を優先させて行の短縮を判断する
sin(1,2);
console.log(add(1,2));

//引数が一つの時、(number)の（）も省略できる
//下記が最も省略された書き方となる
const dom = number => {
    return 3 * number
};
console.log(dom(99999));

const numbers = [ 1,2,3 ];

//map関数アロー関数を使う場合
let sun = numbers.map(number => 2 * number);
console.log(sun);

const profile = {
    name: '太郎',
    getName: function() {
        return this.name;
    }

    };
