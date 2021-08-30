const list = document.getElementById("list-items");
const inputText = document.getElementById("add-input");

function addItem() {
    let newItem = document.createElement("li");
    if (inputText.value === "") return;
    newItem.innerHTML = `<input type='checkbox'><span class='item'>${inputText.value}</span>`;
    list.appendChild(newItem);
    inputText.value = "";
}
