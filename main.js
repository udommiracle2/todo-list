function darkMode() {
    const body = document.querySelector("body");
    const sunMoon = document.getElementById("switch");
    const dark = body.classList.toggle("dark-mode");

    if (dark) {
        sunMoon.classList.add("fa-moon")
        sunMoon.classList.remove("fa-sun")
    }
    else {
        sunMoon.classList.remove("fa-moon")
        sunMoon.classList.add("fa-sun")
    }
}
darkMode()


function timeDate() {
    const today = new Date();

    const todaysDate = today.toLocaleDateString();
    const todaysTime = today.toLocaleTimeString();
    document.getElementById("currentDate").textContent = todaysDate + " " + todaysTime;
}
setInterval(timeDate, 1000)
timeDate();


// function activeBtn(){
//     const btns = document.querySelectorAll(".filter");
    
//     btns.forEach(btn => {
//         btn.addEventListener("click", () => {
//             document.querySelector(".active")?.classList.remove("active");
//             btn.classList.add("active");
//         })
//     })



// }
// activeBtn()




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


function todo() {
    const todoInput = document.getElementById("todo-input");
    const todoBtn = document.getElementById("done-btn");
    const todoCon = document.getElementById("todo-con");
    const warning = document.getElementById("warning");
    

    todoBtn.addEventListener("click", () => {

        const inputValue = todoInput.value.trim();
        
        if (inputValue === "") {
            warning.style.display = "inline";
        }
        else if (inputValue !== "") {
            warning.style.display = "none";

            const list = document.createElement("div")
            list.classList.add("list-con")
            list.innerHTML = `
            <input type="checkbox" name="" id="" class="check">
            <span>${inputValue}</span>
            <button class="delete-btn">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

            list.querySelector(".delete-btn").addEventListener("click", () => {
                list.remove();
                save();
            });

            const checkbox = list.querySelector(".check");
            checkbox.addEventListener("change", save);


            todoCon.append(list);
            todoInput.value = "";
        }
        else {
            return
        }
        save();
    })
}
todo()


function save() {
    const todoArr = [];
    const list = document.querySelectorAll(".list-con")

    for (let i = 0; i < list.length; i++){
        const item = list[i];

        todoArr.push({
            todo: item.querySelector("span").textContent,
            checked: item.querySelector(".check").checked
        })
    }
    localStorage.setItem("data", JSON.stringify(todoArr));
}


function loadTodo() {
    const saveTodo = JSON.parse(localStorage.getItem("data")) || [];
    const todoCon = document.getElementById("todo-con");

    for (let i = 0; i < saveTodo.length; i++){
        const task = saveTodo[i];

        const list = document.createElement("div")
        list.classList.add("list-con")
        list.innerHTML =
            `<input type="checkbox" name="" id="" class="check" ${task.checked ? "checked" : ""}>
            <span>${task.todo}</span>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
            `;
        
        list.querySelector(".delete-btn").addEventListener("click", () => {
            list.remove();
            save();
        })

        const checkbox = list.querySelector(".check");
        checkbox.addEventListener("change", save);

        
        todoCon.appendChild(list);
    }
}
loadTodo();