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
    deletFromSuitarea(cancel.parentNode);

    const cleaningTarget = doneButton.parentNode;
    const text = cleaningTarget.firstElementChild.innerText;
    cleaningTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const finishButton = document.createElement("button");
    finishButton.innerText = "受け取り完了";
    finishButton.addEventListener("click", () => {
      const deletetarget = finishButton.parentNode;
      document.getElementById("just-finish-area").removeChild(deletetarget);
    });

    cleaningTarget.appendChild(li);
    cleaningTarget.appendChild(finishButton);
    document.getElementById("just-finish-area").appendChild(cleaningTarget);
  });

  const cancel = document.createElement("button");
  cancel.innerText = "キャンセル";
  cancel.addEventListener("click", () => {
    deletFromSuitarea(cancel.parentNode);
  });

  const deletFromSuitarea = (target) => {
    document.getElementById("just-cleaning-suit-list").removeChild(target);
  };

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
    deletFromFutonarea(doneButton.parentNode);

    const cleaningTarget = doneButton.parentNode;
    const text = cleaningTarget.firstElementChild.innerText;
    cleaningTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const finishButton = document.createElement("button");
    finishButton.innerText = "受け取り完了";
    finishButton.addEventListener("click", () => {
      const deletetarget = finishButton.parentNode;
      document.getElementById("just-finish-area").removeChild(deletetarget);
    });

    cleaningTarget.appendChild(li);
    cleaningTarget.appendChild(finishButton);
    document.getElementById("just-finish-area").appendChild(cleaningTarget);
  });

  const cancel = document.createElement("button");
  cancel.innerText = "キャンセル";
  cancel.addEventListener("click", () => {
    deletFromFutonarea(cancel.parentNode);
  });

  const deletFromFutonarea = (target) => {
    document.getElementById("just-cleaning-futon-list").removeChild(target);
  };

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
    deletFromElsearea(doneButton.parentNode);

    const cleaningTarget = doneButton.parentNode;
    const text = cleaningTarget.firstElementChild.innerText;
    cleaningTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const finishButton = document.createElement("button");
    finishButton.innerText = "受け取り完了";
    finishButton.addEventListener("click", () => {
      const deletetarget = finishButton.parentNode;
      document.getElementById("just-finish-area").removeChild(deletetarget);
    });

    cleaningTarget.appendChild(li);
    cleaningTarget.appendChild(finishButton);
    document.getElementById("just-finish-area").appendChild(cleaningTarget);
  });

  const cancel = document.createElement("button");
  cancel.innerText = "キャンセル";
  cancel.addEventListener("click", () => {
    deletFromElsearea(cancel.parentNode);
  });

  const deletFromElsearea = (target) => {
    document.getElementById("just-cleaning-else-list").removeChild(target);
  };
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
