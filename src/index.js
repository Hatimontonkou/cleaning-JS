import "./styles.css";

const onClickSuit = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  const doneButton = document.createElement("button");
  doneButton.innerText = "クリーニング済み";
  doneButton.addEventListener("click", () => {
    alert("クリーニング済み");
  });

  const cancel = document.createElement("button");
  cancel.innerText = "キャンセル";
  cancel.addEventListener("click", () => {
    alert("キャンセル");
  });

  div.appendChild(li);
  div.appendChild(doneButton);
  div.appendChild(cancel);
  document.getElementById("just-cleaning-suit-list").appendChild(div);
};

const onClickFuton = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  const doneButton = document.createElement("button");
  doneButton.innerText = "クリーニング済み";
  doneButton.addEventListener("click", () => {
    alert("クリーニング済み");
  });

  const cancel = document.createElement("button");
  cancel.innerText = "キャンセル";
  cancel.addEventListener("click", () => {
    alert("キャンセル");
  });

  div.appendChild(li);
  div.appendChild(doneButton);
  div.appendChild(cancel);
  document.getElementById("just-cleaning-futon-list").appendChild(div);
};

const onClickElse = () => {
  const inputtext = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputtext;

  const doneButton = document.createElement("button");
  doneButton.innerText = "クリーニング済み";
  doneButton.addEventListener("click", () => {
    alert("クリーニング済み");
  });

  const cancel = document.createElement("button");
  cancel.innerText = "キャンセル";
  cancel.addEventListener("click", () => {
    alert("キャンセル");
  });

  div.appendChild(li);
  div.appendChild(doneButton);
  div.appendChild(cancel);
  document.getElementById("just-cleaning-else-list").appendChild(div);
};

document
  .getElementById("add-suit")
  .addEventListener("click", () => onClickSuit());

document
  .getElementById("add-futon")
  .addEventListener("click", () => onClickFuton());

document
  .getElementById("add-else")
  .addEventListener("click", () => onClickElse());
