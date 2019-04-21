// Add new todo-list

const newTodoList = () => {
  const inputValue = document.getElementById("input").value
  const text = document.createTextNode(inputValue)
  const li = document.createElement("li")
  li.appendChild(text)
  if (inputValue === '' || inputValue === ` `) {
    alert("Write something to do!")
  } else {
    document.getElementById("todo-list").appendChild(li);
  }
  document.getElementById("input").value = ""

  const span = document.createElement("span")
  const deleteButton = document.createTextNode("\u00D7")
  span.className = "close"

  span.appendChild(deleteButton)
  li.appendChild(span)
}

// Activate todo-list style that already done

const list = document.querySelector('ul')
list.addEventListener('click', function () {
  if (target.tagName === 'LI') {
    target.classList.toggle('checked')
  }
})