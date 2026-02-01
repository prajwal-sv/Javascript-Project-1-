const todo = document.querySelector('#Todo');
const progeress = document.querySelector('#progress');
const done = document.querySelector('#done');


console.log(todo ,progeress,done);

const task = document.querySelectorAll('.task');

// track the drag of the task
task.forEach(task => {
    task.addEventListener("drag",(e)=>{
        // console.log("draging",e);
    })
})

// task go on progress colom then it add hover over class

progeress.addEventListener("dragenter",(e)=>{
    progeress.classList.add("hover-over");
})
todo.addEventListener("dragenter",(e)=>{
    todo.classList.add("hover-over");
})

done.addEventListener("dragenter",(e)=>{
    done.classList.add("hover-over");
})

// task not on  progress colom then it remove hover over class
progeress.addEventListener("dragleave",(e)=>{
    progeress.classList.remove("hover-over");
})
todo.addEventListener("dragleave",(e)=>{
    todo.classList.remove("hover-over");
})

done.addEventListener("dragleave",(e)=>{
    done.classList.remove("hover-over");
})