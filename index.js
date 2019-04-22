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
  span.className = "delete"

  span.appendChild(deleteButton)
  li.appendChild(span)

  // for (let index = 0; index < close.length; index++) {
  //   close[index].onclick = function () {
  //     let parent = this.parentElement
  //     parent.style.display = "none;"
  //   }
  // }

}

// const close = document.getElementsByClassName("delete")
// for (let index = 0; index < close.length; index++) {
//   close[index].onclick = function () {
//     let parent = this.parentElement
//     parent.style.display = "none;"
//   }
// }




// Activate todo-list line-through style

const list = document.querySelector('ul')
list.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('done')
  }
})

// Give deleteButton to todo-list that already exist before

let myTodolist = document.getElementsByTagName("LI")
let i;
for (i = 0; i < myTodolist.length; i++) {
  let span = document.createElement("span")
  let deleteButton = document.createTextNode("\u00D7")
  span.className = "delete"
  span.appendChild(deleteButton)
  myTodolist[i].appendChild(span)
}