// Add new todo-list

const newTodoList = () => {
  const inputValue = document.getElementById("input").value
  const text = document.createTextNode(inputValue)
  const li = document.createElement("li")
  li.appendChild(text)
  if (inputValue === "" || inputValue === ` `) {
    alert("Write something to do!")
  } else {
    document.getElementById("todo-list").appendChild(li)
  }
  document.getElementById("input").value = ""
}

// Activate todo-list line-through style

const list = document.querySelector("ul")
list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done")
  }
})