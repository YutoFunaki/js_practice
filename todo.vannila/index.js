
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

  //button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了")
  })


  //button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除機能
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  })

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());