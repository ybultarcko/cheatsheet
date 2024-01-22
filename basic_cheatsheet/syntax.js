/**
 * const, let等の変数宣言
 */
// var val1 = 'var変数';
// console.log(val1);

// // var変数は上書き可能
// val1 = 'var変数の上書き';
// console.log(val1);

// //var変数は再宣言可能
// var val1 = 'var変数を再宣言';
// console.log(val1);

// let val2 = 'let変数';
// console.log(val2);

// // letは上書き可能
// val2 = 'let変数を上書き';
// console.log(val2);

// //let変数は再宣言不可能
// let val2 = 'let変数を再宣言';

// const val3 = 'const変数';
// console.log(val3);

// // const変数は上書き不可
// val3 = 'const変数を上書き';

// //const変数は再宣言不可能
// const val3 = 'const変数を再宣言';

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: 'YM',
//   age: 30,
// };
// console.log(val4);
// val4.name = 'オブジェクト内プロパティの変更';
// val4.address = 'オブジェクト内プロパティの追加';
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// console.log(val5);
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = 'Y.M';
// const age = 30;

// //「私の名前はY.Mです。年齢は30歳です。」
// //従来の方法
// const message1 = '私の名前は' + name + 'です。年齢は' + age + '歳です。';
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1('func1です。'));

// const func2 = function (str) {
//   return str;
// };
// console.log(func2('func2です。'));

// //アロー関数
// const func3 = (str) => {
//   return str;
// };
// console.log(func3('func3です。'));

// //単一式の場合、returnと{}を省略できる。
// const func4 = (str) => str;
// console.log(func4('func4です。'));

// //2変数
// const func5 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func5(10, 20));

// //2変数、単一式
// const func6 = (num1, num2) => num1 + num2;
// console.log(func6(20, 20));

// //オブジェクトの返却
// const func7 = (num1, num2) => ({
//   hoge: num1,
//   huga: num2,
// });
// console.log(func7(50, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: 'Y.M',
//   age: 30,
// };
// const message3 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message3);

// const { name, age } = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// const myProfile = ['Y.M', 30];
// const message5 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message5);

// const [name, age] = myProfile;
// const message6 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message6);

/**
 * デフォルト値（引数、分割代入）
 */
// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello('Y.M');
// //引数を設定するとundefinedになる。
// sayHello();//こんにちは！undefinedさん！

// const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん！`);
// sayHello(); //こんにちは！ゲストさん！

//オブジェクト分割代入の場合
// const myProfile = {
//   age: 30,
// };
// const { age, name } = myProfile;
// console.log(age); //30
// console.log(name); //undefined

// const { age, name = 'ゲスト' } = myProfile;
// console.log(age); //30
// console.log(name); //ゲスト

/**
 * オブジェクトの省略記法
 */
// const name = 'Y.M';
// const age = 30;

//省略前
// const myProfile = {
//   name: name,
//   age: age,
// };
// console.log(myProfile);

//省略後
// const myProfile = {
//   name,
//   age,
// };
// console.log(myProfile);

//省略後（1 line）
// const myProfile = { name, age };
// console.log(myProfile);

/**
 * スプレッド構文...
 */

//配列の展開のときに使う
// const arr1 = [1, 2];
// // console.log(arr1); //[1, 2]
// // console.log(...arr1); //1 2（...配列名 で配列の要素を取り出す。）

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//配列をまとめて受け取るときに使う
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合（もとの配列と別物としてコピー）
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// // console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//良くない例（参照）
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */
//従来のfor文
// const nameArr = ['tanaka', 'sato', 'nakamura'];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

//mapを使うとき
// nameArr.map((name) => {
//   console.log(name);
// });

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

//filterを使うとき
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const nameArr = ['tanaka', 'sato', 'Y.M'];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// nameArr.map((name, index) =>
//   console.log(`${index + 1}番目は${nameArr[index]}です。`)
// );

// const nameArr = ['tanaka', 'sato', 'Y.M'];
// const nameNumArr = nameArr.map((name) => {
//   if (name === 'Y.M') {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(nameNumArr);

/**
 * 三項演算子
 */
//　ある条件 ? 条件がtrueのとき : 条件がfalseのとき
// const val1 = 1 > 2 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const num = 1300;
// const formattedNum =
//   typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています!!` : `許容範囲内です。`;
// };
// console.log(checkSum(50, 30));

/**
 * 論理演算子の本当の意味 && ||
 */
// truthy, falsyについて
// "ABC" 0 10 undefined null false NaN "" [] {}
// const val = '';
// if (val) {
//   console.log('valはtruthyです');
// } else {
//   console.log('valはfalsyです');
// }

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log('1か2はtrueになります');
// }
// if (flag1 && flag2) {
//   console.log('1も2もtrueになります');
// }

// (重要) || は左側がtruthyの時にその時点で返却する
// const num = 100;
// const fee = num || '金額未設定です';
// console.log(fee);

// const num = undefined;
// const fee = num || '金額未設定です';
// console.log(fee);

// (重要) && は左側がfalsyの時にその時点で返却する
// const num2 = 0;
// const fee2 = num2 && '何か設定されました';
// console.log(fee2);
