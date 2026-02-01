let taskData ={}
const todo = document.querySelector('#Todo');
const progeress = document.querySelector('#progress');
const done = document.querySelector('#done');

let dragelement = null;


console.log(todo, progeress, done);

const task = document.querySelectorAll('.task');

// track the drag of the task
task.forEach(task => {
    task.addEventListener("drag", (e) => {
        dragelement = task;
    })
})

// Function to add drag-and-drop event listeners on a column element
function addDragEventsOnColum(col) {

    // Triggered when a draggable element enters the column
    col.addEventListener("dragenter", (e) => {
        e.preventDefault(); // Necessary to allow dropping
        col.classList.add("hover-over"); // Add visual highlight to indicate drop target
    });

    // Triggered when a draggable element leaves the column
    col.addEventListener("dragleave", (e) => {
        e.preventDefault();
        col.classList.remove("hover-over"); // Remove highlight when leaving
    });

    // Triggered continuously while dragging over the column
    col.addEventListener("dragover", (e) => {
        e.preventDefault(); // Keep allowing drop (default behavior blocks it)
        // No visual change here, just enabling drop
    });

    // Triggered when the draggable element is dropped inside the column
    col.addEventListener("drop", (e) => {
        e.preventDefault();
        col.appendChild(dragelement); // Append the dragged element into this column
        col.classList.remove("hover-over"); // Remove highlight after drop


        [todo, progeress, done].forEach(col => {
            const tasks = col.querySelectorAll(".task")
            const count = col.querySelector(".right");

            count.innerText = tasks.length;
        })
    });
}

// Attach drag events to all three columns
addDragEventsOnColum(todo);
addDragEventsOnColum(progress);
addDragEventsOnColum(done);

// // task go on progress colom then it add hover over class

// progeress.addEventListener("dragenter",(e)=>{
//     progeress.classList.add("hover-over");
// })
// todo.addEventListener("dragenter",(e)=>{
//     todo.classList.add("hover-over");
// })

// done.addEventListener("dragenter",(e)=>{
//     done.classList.add("hover-over");
// })

// // task not on  progress colom then it remove hover over class
// progeress.addEventListener("dragleave",(e)=>{
//     progeress.classList.remove("hover-over");
// })
// todo.addEventListener("dragleave",(e)=>{
//     todo.classList.remove("hover-over");
// })

// done.addEventListener("dragleave",(e)=>{
//     done.classList.remove("hover-over");
// })


const toggleModalButton = document.querySelector("#toggle-modal");
const modalBg = document.querySelector(".modal .bg")
const modal = document.querySelector(".modal");
const addTaskButton = document.querySelector("#add-new-task")

toggleModalButton.addEventListener("click", () => {
    modal.classList.toggle("active");

})
modalBg.addEventListener("click", () => {
    modal.classList.remove("active");

})

addTaskButton.addEventListener("click", () => {
    const taskTitel = document.querySelector("#task-titel-input").value
    const taskDis = document.querySelector("#task-dis-input").value


    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true")
    div.innerHTML = `<h1>${taskTitel}</h1>
                    <p>${taskDis}</p>
                    <button>Delete</button>`


    todo.appendChild(div);
    [todo, progeress, done].forEach(col => {
        const tasks = col.querySelectorAll(".task")
        const count = col.querySelector(".right");

        count.innerText = tasks.length;
    })


    div.addEventListener("drag", (e) => {
        dragelement = div;
    })

    modal.classList.remove("active")
})