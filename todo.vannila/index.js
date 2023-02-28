
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

  //完了機能
   deleteFromIncompleteList(completeButton.parentNode)

  //完了リストに追加する要素
   const addTarget = completeButton.parentNode;

  //内容テキストを取得
   const text = addTarget.firstElementChild.innerText;

  //div以下を初期化
   addTarget.textContent = null;

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //buttonタグ生成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  //戻るボタンが押された時の処理
  backButton.addEventListener("click", () => {
    const deleteTarget = backButton.parentNode;
    document.getElementById("complete-list").removeChild(deleteTarget)

    //テキスト取得
    const text = backButton.parentNode.firstElementChild.innerText;
  });

  //divタグの子要素に書く要素を設定
  addTarget.appendChild(li);
  addTarget.appendChild(backButton);

  //完了リストに追加
  document.getElementById("complete-list").appendChild(addTarget)
})


  //button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除機能
    deleteFromIncompleteList(deleteButton.parentNode)
  })

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

}

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

//未完了リストに追加する関数
const createIncompleteList = () => {
  
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());