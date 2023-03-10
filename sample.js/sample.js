//https://ibmcsr.udemy.com/course/modern_javascipt_react_beginner/learn/lecture/21899216#overview

//varは再宣言可能な変数
//letは再宣言不可な変数
//constはオブジェクト,配列以外は上書き不可だが再宣言可能

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";//
// val5.push("monkey");//push：配列に追加
// console.log(val5);

//テンプレート文字列
// const named = "named";
// const age = 28;
// const message1 = `私の名前は${named}です。年齢は${age}です。`;
// console.log(message1);


//アロー関数 関数が一行で済む場合は矢印の後にそのまま書いていい
// const func1 = (str) => {
//   return str;
// };
// console.log(func1("func2"));

// const func2 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func2(10, 30));


//分割代入
// const myProfile = {
//   names: "named",
//   age: 28,
// };
// const message2 = `名前は${myProfile.names}、年齢は${myProfile.age}`;

// const { names, age} = myProfile;
// const message3 = `名前は${names}、年齢は${age}`;

// const profile = ["named", 28];
// const [namey, ages] = profile;
// const message4 = `名前は${namey}、年齢は${ages}`;

//デフォルト値
// const sayHello = (names = "Guest") => console.log(`こんにちは！${names}さん！`);
// sayHello("papapa");//引数が何もない場合はundifineとなる

//スプレッド構文
//配列の展開
// const arr1 = [1,2];
// console.log(arr1); //[1,2]
// console.log(...arr1); //1 2

// const sumFunc = (num1, num2) => console.log(num1, num2);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1); //1
// console.log(num2); //2
// console.log(arr3); //[3, 4, 5]

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6); //[10, 20]

// const arr7 = [...arr4, ...arr5];
// console.log(arr7); //[10, 20, 30, 40]


//mapやfilterを使った配列の処理

//const nameArr = ["tanaka", "yamada", "sato"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
//   //tanaka yamada sato
// }

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`))
//1番目はtanakaです
//2番目はyamadaです
//3番目はsatoです

// // const nameArr2 = nameArr.map((name)=>{
// //   return name;
// // })
// // console.log(nameArr2);
// //["tanaka", "yamada", "sato"]

// nameArr.map((name) => console.log(name))
// //tanaka yamada sato

// //filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;//2で割って1余る＝配列の中の奇数だけ返す
// })
// console.log(newNumArr);
// //[1, 3, 5]

// const newNameArr = nameArr.map((name) =>{
//   if (name === "tanaka") {
//     return name
//   } else {
//     return `${name},hello`
//   }
// })
// console.log(newNameArr);
// //["tanaka,hello", "yamada", "sato"]

//三項演算子
//ある条件　？　条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);//false

// const num = 1300;
// console.log(num.toLocaleString());
// //1,300

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "type to Int";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100over" : "under100";
// }
// console.log(checkSum(10, 20))

//論理演算子の本当の意味 && ||
// const flag = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1or2=true")
// }
// if (flag1 && flag2) {
//   console.log("1&2=true")
// }

// //||は左側がfalseなら右側を返す
// const number = 100;
// const fee = number || "noInt";
// console.log(fee)

// //&&は左側がtrueなら右側を返す
// const number2 = 100;
// const fee2 = number2 && "noInt";
// console.log(fee2)