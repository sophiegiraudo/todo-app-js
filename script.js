// Add items
function addItem() {
    // Get text and create node
    var item = document.getElementById("itemText").value; 
    var li = document.createElement("li");
    var itemText = document.createTextNode(item);

    li.append(itemText);
    li.setAttribute("onclick", "checkItem(this);");

    // Add close button
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.setAttribute("onclick", "removeItem(this);");
    span.appendChild(text);
    li.append(span);

    if (item === "") {
        alert("You must write something!");
    } else {
        document.getElementById("itemList").appendChild(li);
    }
    document.getElementById("itemText").value = "";
}

// Check items
function checkItem(li) {
    li.classList.toggle('checked');
}

// Remove items
function removeItem(close) {
    var li = close.parentElement;
    li.parentNode.removeChild(li);
}