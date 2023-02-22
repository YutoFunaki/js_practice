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


//アロー関数
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