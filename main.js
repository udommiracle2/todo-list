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
    const todo = document.getElementById("todo-con")
    const btn = document.getElementById("done-btn")
    
    btn.addEventListener("click", () => {
        const inputValue = input.value.trim();
        if (inputValue === "") {
            return
        }
        const list = document.createElement("div")

        list.innerHTML = `
            <span>${inputValue}</span>
            <button class="delete-btn">
                <i class="fa-solid fa-x"></i>
            </button>
        `;

        list.querySelector(".delete-btn").addEventListener("click", () => {
            list.remove();
        })

        todo.appendChild(list);

        input.value = "";
    }
)}
inputTask();