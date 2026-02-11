function timeDate() {
    const today = new Date();

    const todaysDate = today.toLocaleDateString();
    const todaysTime = today.toLocaleTimeString();
    document.getElementById("currentDate").textContent = todaysDate + " " + todaysTime;
}
timeDate();


function popup() {
    const openBtn = document.getElementById("open-btn");
    const closeBtn = document.getElementById("close-btn");
    const pop = document.getElementById("pop-up");

    openBtn.addEventListener("click", () => {
        pop.classList.add("open");
    })

    closeBtn.addEventListener("click", () => {
        pop.classList.remove("open");
    })
}
popup()


function inputTask() {
    const input = document.getElementById("todo-input");
    const inputValue = input.value;
    const todo = document.getElementById("todo-con")
    const btn = document.getElementById("done-btn")

    if (inputValue === "") {
        return   //todo.textContent = "Please Add a Task";
    }
    else {
        const list = document.createElement("div")

        list.innerHTML = `
            <span>${inputValue}</span>
            <button class="delete-btn" onclick="this.parentElement.remove()">×</button>
        `;
        todo.appendChild(list);

        input.value = "";
    }
}
inputTask();