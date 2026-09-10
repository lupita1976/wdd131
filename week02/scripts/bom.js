
const input = document.getElementById("chapter-input");
const button = document.getElementById("add-button");
const list = document.getElementById("chapter-list");


button.addEventListener("click", () => {

  
  if (input.value === "") {
    input.focus();
    return;
  }

  const listItem = document.createElement("li");

 
  const deleteButton = document.createElement("button");

  
  listItem.textContent = input.value;

 
  deleteButton.textContent = "❌";
  deleteButton.setAttribute("aria-label", `Remove ${input.value}`);

 
  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });


  listItem.appendChild(deleteButton);

 
  list.appendChild(listItem);


  input.value = "";

  
  input.focus();
});

