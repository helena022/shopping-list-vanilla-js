function addItem() {
    const list = document.getElementById("list-items");
    const inputText = document.getElementById("add-input");
    let newItem = document.createElement("li");
    // create new element
    newItem.innerHTML = `<input type='checkbox'><span class='item'>${inputText.value}</span>`;
    list.appendChild(newItem);
    inputText.value = "";
}