// TypeScript 練習用のファイルです

    const sample: string = "ドドド"
    console.log(sample)

    // プリミティブ型（基本型)
    // number型
    let age: number = 23;
    let a: number = 99.9;

    // string型
    let useName: string = "Alice";

    // boolean((真偽値)型
    let isActive: boolean = true;
    let hasPermission :boolean = false;

    // null型 undefind型 bigint型 symbol型
    // 省略


    // リテラル型
    let direction: "left" | "right";
    direction = "left";
    direction = "top"; // 変数定義時の意図しない値が代入されたことで　←右の変数代入はエラーとなる

    // ユニオン型
    let id: string | number
    id = "123";
    id = 235;
    id = true //trueはboolean型でstringやnumberではないため、エラーとなる

    // 配列型
    let number: number[] = [1, 2, 3, 4, 5];
    let names: Array<string> = ["Alice", "Bob", "Charlie"];

    console.log(number);
    console.log(names);

    // タプル型
    let person: [string, number] = ["Alice", 24];
    let another: [string, number] = [25, "Alice"]

    // オブジェクト型
    type User = {
    name: string;
    age: number;
    isAdmin?: boolean;
    };

    let use: User = { name: "Bob", age: 39 };

    console.log(use);

    // 型の使い方
    //文字列型
    let message: string = "Hello, TypeScript";
    message = 123;  // これはエラー: number型はstring型に代入できない(messageは最初にstring型と定義しているため)

    //数値型
    const count: number = 32;
    count = "42" //count は最初にnumberとして定義されているため、string型は代入できない

    //真偽値(boolean)型の使い方
    let Active: boolean = true;
    // 以下は全てエラー、boolean型にstringもnumberも代入できない
    Active = "true"
    Active = 1

    // 関数の型定義
    //関数の戻り値にも型をつけられる、引数や返す値が明確になり、安全性を担保できる
    function greet(name: string): string {
    return `Hello, ${name}!`;
    }

    console.log(greet("Alice")); // "Hello, Alice!"
    console.log(greet(123));  //戻り値のnameはstring型であることを定義しているため、numberはエラーとなる

    // オブジェクトリテラルでの型指定
    const user: { name: string; age: number } = {
        name: "bob",
        age: 30,
    };

    //型エイリアス(type)やインターフェイス(interface)の利用
    type UserType = {
        name: string;
        age: number;
        isAdmin?: boolean;
    };


    // 型エイリアスを使った場合
    const userA: UserType = {
        name: "cake",
        age: 24,
    };
    console.log(userA);

    //インターフェイスを使った場合
    interface IUser {
        name: string;
        age: number;
    }

    const userB: IUser = { name: "DA", age: 35 };
    console.log(userB);

    //配列型
    //数値の書き方
    const scores: number[] = [1,2,3];
    console.log(scores)

    //文字列の書き方
    const names: Array<string> = ["Alice", "Bob", "Charlie"];
    console.log(names);

    //タプル型
    function getUserInfo(): [string, number] {
        return ["Alice", 25];
    }

    const [ userName, userAge] = getUserInfo();
    console.log(userName, userAge); //[LOG]: "Alice",  25 と出力され、タプル型は要素の型と順番が固定される配列。

    //ユニオン型
    let id: string | number;
    id = "abc123";  // OK
    id = 456;       // OK
    id = true;   // エラー: booleanは許容されません

    // ※{ 型ガードの利用例 }

    //以下はtypeofを使った例 実行時に値の方をチェックして処理を分岐できる
    function printId(id: string | number) {
        if (typeof id === "string") {
            console.log(`ID (string): ${id.toUpperCase()}`);
        } else {
            console.log(`ID (number): ${id}`);
        }
    }

    printId("aaa");
    printId(123);

    //keyofを使った例、こちらの場合はオブジェクトのプロパティ名が正しいかチェックできる

    interface Product {
        name: string;
        price: number;
    }

    function getProductValue(product: Product, key: keyof Product) {
        return product[key];
    }

    const product: Product = {
        name: "ooo", price: 1333
    };
    console.log(getProductValue(product, "name"));
    console.log(getProductValue(product, "price"));


    //ジェネリクス
    //ジェネリック関数の例: 引数をそのまま返す関数
    function identity<T>(value: T): T {
        return value;
    }

    console.log(identity<string>("Hello"));   // 出力: Hello
    console.log(identity<number>(123));       // 出力: 123

    //型推論により、型指定を省略できる
    console.log(identity("world"));

    //ジェネリクスの例1 型が複数ある時
    function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
    }

    // 推論できる
    const p1 = pair("apple", 42);  // T: string, U: number → [string, number]

    // 明示的に指定
    const p2 = pair<string, boolean>("yes", true);
