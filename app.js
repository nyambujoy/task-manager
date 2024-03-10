const err = document.querySelector(".err")
const inputTaskAdd = document.querySelector("#add")

const addBtn = document.querySelector("#addBtn")
const inputSearch = document.querySelector("#search")

const taskList = document.querySelector(".task-list")
// console.log(taskList)
const clearAll = document.querySelector(".clear")

// console.log(err, inputTaskAdd, inputSearch, addBtn, taskList, clearAll)



addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    // make sure its not empty
    if (inputTaskAdd.value !== '') {
        const taskText = inputTaskAdd.value.trim()
        console.log(taskText)
        const newli = document.createElement("li")
        newli.className = "task"
        const taskInput = document.createElement("input")
        taskInput.type = "text"
        taskInput.disabled = true
        taskInput.className = "disabledTask"
        taskInput.value = taskText
        newli.appendChild(taskInput)

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "delete"
        deleteBtn.className = "deleteBtn"
        newli.appendChild(deleteBtn)

        const editBtn = document.createElement("button")
        editBtn.textContent = "edit"
        editBtn.className = "editBtn"
        newli.appendChild(editBtn)
        taskList.append(newli)
        // console.log(taskList)

        inputTaskAdd.value = ''

    } else {
        err.style.display = "block"
        setTimeout(() => {
            err.style.display = "none"
        }, 2000);
    }

})


taskList.addEventListener("click", (e) => {
    // e.preventDefault()
    // console.log(e.target.classList)

    if (e.target.classList.contains("deleteBtn")) {
        // console.log(e.target.parentElement)
        e.target.parentElement.remove()
    }


})

taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("editBtn")) {
        console.log(e.target.parentElement);
        const input = e.target.parentElement.querySelector('input[type="text"]');
        input.disabled = !input.disabled;
        if (!input.disabled) {
            input.focus();
        }
    }
});


clearAll.addEventListener("click", () => {
    taskList.innerHTML = ""
})

inputSearch.addEventListener("keyup", (e) => {
    e.preventDefault();
    let searchedWord = e.target.value.toLowerCase();

    const taskItems = document.querySelectorAll(".task");
    taskItems.forEach((taskItem) => {
        let taskText = taskItem.querySelector(".disabledTask").value.toLowerCase();

        if (taskText.indexOf(searchedWord) !== -1) {
            taskItem.style.display = "block";
        } else {
            taskItem.style.display = "none";
        }
    });
});
