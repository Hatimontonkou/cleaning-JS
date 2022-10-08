import "./styles.css";

const onClickSuit = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  div.appendChild(li);
  document.getElementById("just-cleaning-suit-list").appendChild(div);
};

const onClickFuton = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  div.appendChild(li);
  document.getElementById("just-cleaning-futon-list").appendChild(div);
};

const onClickElse = () => {
  const inputtext = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputtext;

  div.appendChild(li);
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
