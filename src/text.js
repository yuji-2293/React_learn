//ES6のコードをBabelでトランスパイルししてES5にして動かす
//ES5~ 一年ごとにverアップされていく
//map,reduce,などの便利メソッドを知る
//データのコレクションを綺麗に使えるかどうかで質が問われる
//forループの脱却
//なぜ？ → 1.記述量が多く、タイポミスを招く 2.構文がわかりにくい（可読性が悪い）

//map関数
//元のデータを変化させないことをミューテートという
//元のデータを加工したいときは別のデータを定義してあげる
//配列からコールバック関数に値を渡し、結果の配列に戻り値として返す
//mapは新しい配列を生成し、値を渡してくれる
//map関数は頻出する関数で一覧表示や一覧選択などで利用される

//pluck関数(pluckは通称の名前)以下の条件で使われる関数のことを言う
//pluck関数とは「オブジェクトの配列」と「プロパティ名を表す文字列」を受付けて、渡したプロパティの値だけを含んだ配列を返します。

//filter関数
//配列からコールバック関数値を渡す、この時のデータはbooleanで渡される(true or false)

//find関数
//filter同様戻り値にbooleanを採用

//everyメソッド
//条件式から論理積をとる
//一つでもfalseとなる条件があればfalseを返す
//someメソッド
//条件式から論理和を取る
//1つでもtrueとなる条件があれば、trueを返す

//reduce
//初期値を必要とする
//コールバック関数に渡す引数が２つになる
//配列内で計算した結果が次の計算式に渡される

//uniqueメソッド

//constとletで変数の宣言
//ES6ならではの新機能
//const = 定数 変わる予定のないもの
//let = 変数 変わる予定があるもの
//varはもう使わない
//ES6の２点の変更点
//1.ES5までの書き方を改善する構文
//2.全く新しい構文
//アロー関数とは
//コールバック関数はcontextが違うことも覚えておく
//コールバック関数内では通常thisが使われると未定義となる
//解決方法としてアロー関数が使われる→lexical this 構文的
//アロー関数を書く場所よってthisが確定される
//アロー関数内でthisを使うことで、コールバック関数内であってもthisが感覚的にそのまま使うことができる
