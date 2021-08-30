function addItem() {
    const list = document.getElementById("list-items");
    const inputText = document.getElementById("add-input");
    
    let newItem = document.createElement("li");
    if (inputText.value === "") return;
    newItem.innerHTML = `<input type="checkbox"><span class="item">${inputText.value}</span><button class="btn-remove" onClick="return this.parentNode.remove();">X</button>`;
    list.appendChild(newItem);
    inputText.value = "";
}
