
const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する処理
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  alert(inputText);
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());