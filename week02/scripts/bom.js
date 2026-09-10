const input = document.getElementById("chapter-input");
const button = document.getElementById("add-button");
const list = document.getElementById("chapter-list");

const listItem = document.createElement("li");


const deleteButton = document.createElement("button");


listItem.textContent = input.value;

deleteButton.textContent = "❌";
deleteButton.setAttribute("aria-label", "Close");

listItem.appendChild(deleteButton);


list.appendChild(listItem);

