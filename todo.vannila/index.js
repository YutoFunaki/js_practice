
const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する処理
  //https://ywork2020.com/content/js-value.html これ見たらgetElementById.valueがわかる
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //luタグ作成
  const li = document.createElement("li");
  //innerTextは要素のなかに何を入れるかを決めることができる。今回は入力された値のinputTextを入れる。
  li.innerText = inputText;
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());